$('.u-hslform__combo-field').keyup( function() {
  if (this.value === "" ) {
    $(this).parent().addClass('u-hslform__combo--is-empty');
  } else {
    $(this).parent().removeClass('u-hslform__combo--is-empty');
    }
})