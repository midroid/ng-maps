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
        propertyList.propertyFormData = propertyList.propertyModel;
        
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
                        
        propertyList.enableDetailView = false;
                        
        propertyList.addProperty = function() {
            var len = propertyList.properties.length;
            console.log('length before' + len);

            if(propertyList.properties.indexOf(propertyList.propertyModel) == -1) {
                propertyList.properties.push(propertyList.propertyModel);
            } else {
                var index = propertyList.properties.indexOf(propertyList.propertyModel);
                propertyList.properties[index] = propertyList.propertyModel;
                console.log(propertyList.properties[index]);
            }
            
            propertyList.propertyModel = {};
            
        };
        
        propertyList.btnCancel = function() {
            propertyList.propertyModel = {};
            document.getElementById('property-details-form').style.display = 'none';
            document.getElementById('place-details').style.display = 'block';
        };
        
        propertyList.showPropertyDetails = function(property) {
            propertyList.propertyDetailName = property.name;
            propertyList.propertyDetailAddress = property.address;
            propertyList.propertyDetailOwner = property.owner.name;
            propertyList.propertyDetailCoordinatesLongitude = property.coordinates.longitude;
            propertyList.propertyDetailCoordinatesLatitude = property.coordinates.latitude;
            console.log(property.coordinates.latitude);
            propertyList.propertyFormData = property;
            document.getElementById('place-details').scrollIntoView();
            propertyList.moveToLocation(property.coordinates.latitude, property.coordinates.longitude);
        };
        
        propertyList.editPropertyDetails = function() {
            document.getElementById('place-details').style.display = 'none';
            document.getElementById('property-details-form').style.display = 'block';
            propertyList.propertyModel = propertyList.propertyFormData;
            
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
               
        propertyList.addNewProperty = function() {
            document.getElementById('place-details').style.display = 'none';
            document.getElementById('property-details-form').style.display = 'block';
            document.getElementById('property-details-form').scrollIntoView();
        }         
        
    });