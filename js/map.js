export default class Modal {

  constructor() {
    this.zoom = 15;
    this.latlng = { lat: 48.868498, lng: 2.349522 };

    this.init();
  }

  init() {
    const myOptions = {
      center: this.latlng,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(document.getElementById('map'), myOptions);

    new google.maps.Marker({
      position: this.latlng,
      map: this.map,
      title: 'Blaaast'
    });
  }

}
