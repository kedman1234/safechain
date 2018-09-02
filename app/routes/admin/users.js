import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
        {
          "id": "1",
          "status": "active",
          "isadmin": true,
          "name": "Pritam Bhanji",
          "email": "pritam@safechain.io",
          "phone": "(614) 362-8058"
        },
        {
          "id": "2",
          "status": "active",
          "isadmin": false,
          "name": "kyle edawrds",
          "email": "kyle+3@safechain.io",
          "phone": "(614) 570-8316"
        },
        {
          "id": "3",
          "status": "active",
          "isadmin": false,
          "name": "kyle edawrds",
          "email": "kyle+5@safechain.io",
          "phone": "(614) 570-8316"
        },
        {
          "id": "4",
          "status": "active",
          "isadmin": false,
          "name": "narayan barik",
          "email": "barik.narayan@gmail.com",
          "phone": "614-362-8058"
        },
        {
          "id": "5",
          "status": "active",
          "isadmin": false,
          "name": "N B",
          "email": "barik.narayan@hotmail.com",
          "phone": "614-362-8058"
        },
        {
          "id": "6",
          "status": "active",
          "isadmin": true,
          "name": "Megan Harris",
          "email": "megam@safechain.io",
          "phone": "(937) 360-8876"
        },
        {
          "id": "7",
          "status": "active",
          "isadmin": true,
          "name": "Megan Harris",
          "email": "megam@safechain.io",
          "phone": "(937) 360-8876"
        },
        {
          "id": "8",
          "status": "active",
          "isadmin": true,
          "name": "Anthony Dean",
          "email": "anthony@safechain.io",
          "phone": "(614) 595-8143"
        },
        {
          "id": "9",
          "status": "active",
          "isadmin": true,
          "name": "Anthony Dean",
          "email": "anthony@safechain.io",
          "phone": "(614) 595-8143"
        },
        {
          "id": "10",
          "status": "active",
          "isadmin": true,
          "name": "Deepak Jain",
          "email": "deepak@safechain.io",
          "phone": "(614) 362-8058"
        }
    ];
  }
});
