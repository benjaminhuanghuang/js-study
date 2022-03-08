const event = {
  name: 'Birthday Party',
  guestList: ['Ben', 'Lily','Mike'],
  printGuestList(){
    const that = this;
    this.guestList.forEach(function (guest){
      console.log(guest + ' is attending '+ that.name);
    });
  }
}

const event_better = {
  name: 'Birthday Party',
  guestList: ['Ben', 'Lily','Mike'],
  printGuestList(){
    this.guestList.forEach((guest)=>{
      console.log(guest + ' is attending '+ this.name);
    });
  }
}

event.printGuestList();