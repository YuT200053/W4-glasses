$(document).ready(function () {
  $("#location-area").change(function () {
    switch ($(this).val()) {
      case "0":
        $(".taipei").show();
        $(".taichung").show();
        $(".kaohsiung").show();
        break;
      case "1":
        $(".taipei").show();
        $(".taichung").hide();
        $(".kaohsiung").hide();
        break;
      case "2":
        $(".taipei").hide();
        $(".taichung").show();
        $(".kaohsiung").hide();
        break;
      case "3":
        $(".taipei").hide();
        $(".taichung").hide();
        $(".kaohsiung").show();
        break;
    }
  });
});
