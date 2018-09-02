import Route from '@ember/routing/route';

export default Route.extend({
   model() {
    //return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    return [{
            "id": "1",
            "name": "1168 East Broad Street, Columbus Ohio 43205",
            "orderid": "010-123456",
            "type": "Purchase",
            "propertyid": "123",
            "open": "2018-04-27T11:15:30.000Z",
            "close": "Fri, Apr 27, 2018"
          },
          {
            "id": "2",
            "name": "Testimony Avenue, Carmel Indiana 46033",
            "orderid": "010-456798",
            "type": "Purchase",
            "propertyid": "243",
            "open": "2003-07-27T11:15:30.000Z",
            "close": "Sun, Jul 27, 2003"
          },
          {
            "id": "3",
            "name": "910 West Rich Street, Columbus Ohio 43222",
            "orderid": "010-756828",
            "type": "Purchase",
            "propertyid": "458",
            "open": "2018-04-27T11:15:30.000Z",
            "close": "Fri, Apr 27, 2018"
          }
    ];
    }
});
