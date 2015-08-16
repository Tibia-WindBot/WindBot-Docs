(function() {
    var data = 04ffa3837e10c181cfa8335a104a9f1e,
        docsData = [],
        searchData = [],
        groupsData = [];

    $.each(data, function(_, value) {
        $.map(value.items, function(group) {
            group.docsId = groupsData.length;
            var groupData = {
                name: group.name,
                parentId: value.id,
                description: group.description,
                items: []
            };
            $.map(group.items, function(item) {
                item.docsId = searchData.length;
                item.parent = group.name;
                item.parentId = value.id;
                item.groupId = group.id;
                item.type = value.type;
                item.image = value.image;
                searchData.push(item);
                groupData.items.push({
                    docsId: item.docsId,
                    name: item.name
                });
                return item;
            });
            groupsData.push(groupData);
            return group;
        });
        docsData.push(value);
    });

    var docsSearcher = new Searcher();
    docsSearcher.setData(searchData);

    var listTemp = Handlebars.compile($('#docs-list-template').html());
    var groupTemp = Handlebars.compile($('#docs-group-template').html());
    var itemTemp = Handlebars.compile($('#docs-item-template').html());
    var searchTemp = Handlebars.compile($('#docs-search-template').html());

    Handlebars.registerPartial('docs-info', $('#docs-info-partial').html());

    Handlebars.partials['docs-function'] = Handlebars.compile($('#docs-function-partial').html());
    Handlebars.partials['docs-variable'] = Handlebars.compile($('#docs-variable-partial').html());
    Handlebars.partials['docs-iterator'] = Handlebars.compile($('#docs-iterator-partial').html());
    Handlebars.partials['docs-custom-type'] = Handlebars.compile($('#docs-custom-type-partial').html());
    Handlebars.partials['docs-widget'] = Handlebars.compile($('#docs-widget-partial').html());

    Handlebars.registerHelper('ifEq', function(v1, v2, options) {
        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    Handlebars.registerHelper('ifStr', function(value, options) {
        if (value.match(/^'.+?'$/)) {
            return options.fn(this);
        }
        return options.inverse(this);
    });

    Handlebars.registerHelper('clearName', function(v1) {
        return v1.replace(/([\$\.]|\(.+?\))/g, '');
    });

    Handlebars.registerHelper('include', function(templatename, options) {
        var partial = Handlebars.partials[templatename];
        var context = $.extend({}, this, options.hash);
        return partial(context);
    });

    var html = listTemp(docsData);
    $('#docs-container').html(html);

    $('.docs').on('click', '.docs-list a, #docs-content .docs-group-list a', function(e, ee) {
        if (typeof e.preventDefault === 'function') {
            e.preventDefault();
        }
        if (typeof ee === 'object' && typeof ee.preventDefault === 'function') {
            ee.preventDefault();
        }
        $('.js-content').css('height', 'auto');
        var $this = $(this);
        var hash = $this.attr('href');
        var target = $(hash);
        target.attr('id', '');
        $('.anchor').attr('id', hash.substring(1));
        window.location.hash = hash;
        $('.anchor').attr('id', '');
        target.attr('id', hash.substring(1));
        if (!$this.is('.active')) {
            $('#docs-container .active').removeClass('active');
            var active = target.find('> *:first-child').addClass('active');
            if (!active.is(':visible')) {
                active.parentsUntil('#docs-container', 'li').addClass('open');
            }
            if ($this.is('.docs-subheader') && !$this.is('.docs-search-item')) {
                $('#docs-content').html(groupTemp(groupsData[parseInt($this.data('docs-id'))]));
            } else {
                $('#docs-content').html(itemTemp(searchData[parseInt($this.data('docs-id'))]));
            }
            prettyPrint();
        }
        $('.js-content').css('height', $('.js-docs').height() + 'px');
    });

    $('#docs-container .docs-list li .docs-header .down-arrow, #docs-container .docs-list li .docs-subheader .down-arrow').click(function(e) {
        $('.js-content').css('height', 'auto');
        $(this).parent().parent().removeClass('open').addClass('closed');
        $('.js-content').css('height', $('.js-docs').height() + 'px');
    });

    $('#docs-container .docs-list li .docs-header, #docs-container .docs-list li .docs-subheader').click(function() {
        $('.js-content').css('height', 'auto');
        var parent = $(this).parent();
        if (parent.is('.closed')) {
            parent.removeClass('closed');
        } else {
            parent.addClass('open');
        }
        $('.js-content').css('height', $('.js-docs').height() + 'px');
    });

    if (window.location.hash) {
        var $target = $(window.location.hash);
        if ($target.length === 1) {
            $target.find('> a').trigger('click');
            setTimeout(function() {
            	$('body').scrollTop(0);
            }, 100);
        }
    }

    $('#search-box').on('keyup', function() {
        var query = $('#search-box').val();
        if (query === '') {
            $('#docs-container').show();
            $('#docs-search-results').hide();
        } else {
            $('#docs-container').hide();
            $('#docs-search-results').html(searchTemp(docsSearcher.search(query))).show();
        }
    });

    $('#docs-search-results').on('click', 'a', function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href'));
        if ($target.length === 1) {
            $('#docs-container li').removeClass('open');
            $target.find('> a').trigger('click');
        }
        $(this).parent().parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });
})();