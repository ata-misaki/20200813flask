function kakunin(){
    ret = confirm("削除します。よろしいですか？");
    if (ret == true){
      location.href = "edit.html";
    }
    else{
		window.alert('キャンセルされました'); // 警告ダイアログを表示
	}
  }

<script type="text/javascript">
  $(function() {
    $('#files').css({
        'position': 'absolute',
        'top': '-9999px'
    }).change(function() {
        var val = $(this).val();
        var path = val.replace(/\\/g, '/');
        var match = path.lastIndexOf('/');
   $('#filename').css("display","inline-block");
        $('#filename').val(match !== -1 ? val.substring(match + 1) : val);
    });
    $('#filename').bind('keyup, keydown, keypress', function() {
        return false;
    });
    $('#filename, #btn').click(function() {
        $('#files').trigger('click');
    });
});
</script>