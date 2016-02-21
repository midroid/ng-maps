angular.module('ng-maps', [])
    .controller('PropertyListController', function() {
        
        var propertyList = this;
        
        propertyList.propertyModel = 
            {
                id : '',
                name : '',
                address : '',
                owner : {
                    id : '',
                    name : ''
                },
                coordinates : {
                    latitude : '',
                    longitude : ''
                }
            };
        
        
        propertyList.properties = [ 
                          { 
                        
                            id: 1, 
                        
                            name: "Tokyo apartment with view", 
                        
                            address: "3-4-5 Shibuya", 
                        
                            owner: { 
                        
                              id: 1, 
                        
                              name: "Aoki Tomoya" 
                        
                            }, 
                        
                            coordinates: { 
                        
                              latitude: 35.656577, 
                        
                              longitude: 139.703372
                        
                            } 
                        
                          }, 
                          { 
                        
                            id: 2, 
                        
                            name: "Tokyo apartment without view", 
                        
                            address: "4-5-6 Shinjuku", 
                        
                            owner: { 
                        
                              id: 2, 
                        
                              name: "Tomoya Aoki" 
                        
                            }, 
                        
                            coordinates: { 
                        
                              latitude: 35.656577,  
                        
                              longitude: 139.703372
                        
                            } 
                        
                          }
                        ];
                        
        propertyList.addProperty = function() {
            var len = propertyList.properties.length;
            console.log('length before' + len);
            // propertyList.properties.push({
            //     id : len,
            //     name : propertyList.name,
            //     address : propertyList.address,
            //     owner : { 
            //         id : 1,
            //         name : propertyList.ownername
            //     },
            //     coordinates : { 
            //         latitude : propertyList.coordinateslatitude,
            //         longitude : propertyList.coordinateslongitude
            //     }
            // });

            if(propertyList.properties.indexOf(propertyList.propertyModel) == -1) {
                propertyList.properties.push(propertyList.propertyModel);
            } else {
                var index = propertyList.properties.indexOf(propertyList.propertyModel);
                propertyList.properties[index] = propertyList.propertyModel;
                console.log(propertyList.properties[index]);
            }
            propertyList.name = '';
            propertyList.address = '';
            propertyList.ownername = '';
            propertyList.coordinateslatitude = '';
            propertyList.coordinateslongitude = '';
            
        };
        
        propertyList.btnCancel = function() {
            propertyList.name = '';
            propertyList.address = '';
            propertyList.ownername = '';
            propertyList.coordinateslatitude = '';
            propertyList.coordinateslongitude = '';
        };
        
        propertyList.showPropertyDetails = function(property) {
            propertyList.propertyDetailName = property.name;
            propertyList.propertyDetailAddress = property.address;
            propertyList.propertyDetailOwner = property.owner.name;
            propertyList.propertyDetailCoordinatesLongitude = property.coordinates.longitude;
            propertyList.propertyDetailCoordinatesLatitude = property.coordinates.latitude;
            console.log(property.coordinates.latitude);
            propertyList.propertyModel = property;
            propertyList.moveToLocation(property.coordinates.latitude, property.coordinates.longitude);
        };
        
        propertyList.editPropertyDetails = function() {
            
        }
        
        propertyList.mapOptions = {
            zoom :13,
            center : new google.maps.LatLng(35.656577, 139.703372),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        } 
        
        propertyList.map = new google.maps.Map(document.getElementById('map'), propertyList.mapOptions);
        
        propertyList.moveToLocation = function(latitude, longitude) {
            var center = new google.maps.LatLng(latitude, longitude);
            propertyList.map.panTo(center);
        }
                        
        
    });