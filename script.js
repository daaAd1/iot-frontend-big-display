function getTransitInfo() {
  // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
  //   if (this.readyState == 4 && this.status == 200) {
  //     const res = JSON.parse(this.response);
  //     const { response } = res;

  //     console.log({ response });
  //     console.log($('.body'));
  //     $('.body').empty();

  //     response.map((transit) => {
  //       const { mapRoute, name } = transit;
  //       const bus = `<div class="cisloAutobusu">${mapRoute.lineNumber}</div>`;
  //       const leaveTime = `<div class="casOdchodu">${mapRoute.departure_time}</div>`;
  //       const stop = `<div class="zastavka">${mapRoute.departure_stop} --> ${name} </div>`;
  //       const content = $('<div/>');
  //       content.addClass('content');
  //       content.append(bus, leaveTime, stop);
  //       $('.body').append(content);
  //     });
  //     const header = `<h1 class="header">MHD app</h1>`;
  //     $('.body').prepend(header);
  //   }
  // };

  // xhttp.open('GET', 'http://localhost:5000/transit', true);
  // xhttp.send();
  const response = [
    {
      name: 'Stanica',
      value: 'stanicne+namestie',
      mapRoute: {
        arrival_stop: 'Staničné námestie',
        arrival_time: '4:03pm',
        departure_time: '2',
        departure_stop: 'Technická univerzita',
        lineNumber: '19',
      },
    },
    {
      name: 'Barca',
      value: 'barca',
      mapRoute: {
        arrival_stop: 'Barca, kostoly',
        arrival_time: '4:29pm',
        departure_time: '6',
        departure_stop: 'Technická univerzita',
        lineNumber: '12',
      },
    },
    {
      name: 'Nad jazerom',
      value: 'stanicne+namestie',
      mapRoute: {
        arrival_stop: 'Staničné námestie',
        arrival_time: '4:03pm',
        departure_time: '8',
        departure_stop: 'Technická univerzita',
        lineNumber: '19',
      },
    },
    {
      name: 'Terasa',
      value: 'kino+druzba',
      mapRoute: {
        arrival_stop: 'Nám. Maratónu mieru',
        arrival_time: '3:53pm',
        departure_time: '11',
        departure_stop: 'Amfiteáter',
        lineNumber: '6',
      },
    },
    {
      name: 'Námestie osloboditeľov',
      value: 'namestie+osloboditelov',
      mapRoute: {
        arrival_stop: 'Nám. osloboditeľov',
        arrival_time: '4:12pm',
        departure_time: '5',
        departure_stop: 'Amfiteáter',
        lineNumber: '6',
      },
    },
    {
      name: 'Stará nemocnica',
      value: 'stara+nemocnica',
      mapRoute: {
        arrival_stop: 'Stará nemocnica',
        arrival_time: '4:11pm',
        departure_time: '10',
        departure_stop: 'Poliklinika Sever',
        lineNumber: '4',
      },
    },
  ];
  const wrapper = $('<div/>');
  wrapper.addClass('wrapper');
  response.map((transit) => {
    const { mapRoute, name } = transit;
    const bus = `<div class="cisloAutobusu">${mapRoute.lineNumber}</div><br />`;
    const leaveTime = `<div class="casOdchodu">o <b>${
      mapRoute.departure_time
    }</b> minúty</div><br />`;
    const numberTimeWrapper = $('<div/>');
    numberTimeWrapper.addClass('numberTimeWrapper');
    numberTimeWrapper.append(bus, leaveTime);
    const stop = `<div class="zastavka">${
      mapRoute.departure_stop
    } --> </div><br /><div class="zastavka"> ${name} </div><br /><br/>`;
    const content = $('<div/>');
    content.addClass('content');
    content.append(numberTimeWrapper, stop);
    wrapper.append(content);
  });
  const header = `<h1 class="header">MHD app</h1>`;
  $('.body').prepend(header);
  $('.body').append(wrapper);
}

getTransitInfo();
