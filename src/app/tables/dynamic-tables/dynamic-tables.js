$(function() {
    var $el = $('#dataTables-example');

    if (!$el.length) {
        return false;
    }

	$el.DataTable({
	    responsive: true,
	    paging: true,
    	scrollX: true
	});
});