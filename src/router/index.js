import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = resolve => {
    import('@/views/home/home').then(module => {
        resolve(module)
    })
}
const parkIndex = resolve => {
    import('@/views/park/index/index').then(module => {
        resolve(module)
    })
}
const forestWorld = resolve => {
    import('@/views/park/forestWorld/forestWorld').then(module => {
        resolve(module)
    })
}
const forestWorldAboutUs = resolve => {
    import('@/views/park/forestWorld/aboutUs/aboutUs').then(module => {
        resolve(module)
    })
}
const forestWorldDining = resolve => {
    import('@/views/park/forestWorld/Dining/Dining').then(module => {
        resolve(module)
    })
}
const forestWorldMap = resolve => {
    import('@/views/park/forestWorld/map/map').then(module => {
        resolve(module)
    })
}
const waterPark = resolve => {
    import('@/views/park/waterPark/waterPark').then(module => {
        resolve(module)
    })
}
const waterParkAboutUs = resolve => {
    import('@/views/park/waterPark/aboutUs/aboutUs').then(module => {
        resolve(module)
    })
}
const waterParkDining = resolve => {
    import('@/views/park/waterPark/Dining/Dining').then(module => {
        resolve(module)
    })
}
const waterParkMap = resolve => {
    import('@/views/park/waterPark/map/map').then(module => {
        resolve(module)
    })
}
const ecoVillage = resolve => {
    import('@/views/park/waterPark/ecoVillage/ecoVillage').then(module => {
        resolve(module)
    })
}
const suxiansen = resolve => {
    import('@/views/park/suxiansen/suxiansen').then(module => {
        resolve(module)
    })
}
const waterWorld = resolve => {
    import('@/views/park/waterWorld/waterWorld').then(module => {
        resolve(module)
    })
}
const waterWorldAboutUs = resolve => {
    import('@/views/park/waterWorld/aboutUs/aboutUs').then(module => {
        resolve(module)
    })
}
const waterWorldDining = resolve => {
    import('@/views/park/waterWorld/Dining/Dining').then(module => {
        resolve(module)
    })
}
const waterWorldMap = resolve => {
    import('@/views/park/waterWorld/map/map').then(module => {
        resolve(module)
    })
}
const forestTown = resolve => {
    import('@/views/park/forestTown/forestTown').then(module => {
        resolve(module)
    })
}
const forestTownAboutUs = resolve => {
    import('@/views/park/forestTown/aboutUs/aboutUs').then(module => {
        resolve(module)
    })
}
const forestTownDining = resolve => {
    import('@/views/park/forestTown/Dining/Dining').then(module => {
        resolve(module)
    })
}
const forestTownMap = resolve => {
    import('@/views/park/forestTown/map/map').then(module => {
        resolve(module)
    })
}
const facility = resolve => {
    import('@/views/park/facility/facility').then(module => {
        resolve(module)
    })
}
const facilityDetail = resolve => {
    import('@/views/park/facility/detail').then(module => {
        resolve(module)
    })
}
const hotelIndex = resolve => {
    import('@/views/hotel/index/index').then(module => {
        resolve(module)
    })
}
const resortHotelIndex = resolve => {
    import('@/views/hotel/resortHotel/index/index').then(module => {
        resolve(module)
    })
}
const resortHotelRoom = resolve => {
    import('@/views/hotel/resortHotel/room/room').then(module => {
        resolve(module)
    })
}
const resortHotelFood = resolve => {
    import('@/views/hotel/resortHotel/food/food').then(module => {
        resolve(module)
    })
}
const resortHotelMeeting = resolve => {
    import('@/views/hotel/resortHotel/meeting/meeting').then(module => {
        resolve(module)
    })
}
const resortHotelIntro = resolve => {
    import('@/views/hotel/resortHotel/intro/intro').then(module => {
        resolve(module)
    })
}
const resortHotelTraffic = resolve => {
    import('@/views/hotel/resortHotel/traffic/traffic').then(module => {
        resolve(module)
    })
}
const resortHotelScenicSpot = resolve => {
    import('@/views/hotel/resortHotel/scenicSpot/scenicSpot').then(module => {
        resolve(module)
    })
}
const ibisIndex = resolve => {
    import('@/views/hotel/ibis/index/index').then(module => {
        resolve(module)
    })
}
const ibisRoom = resolve => {
    import('@/views/hotel/ibis/room/room').then(module => {
        resolve(module)
    })
}
const ibisFood = resolve => {
    import('@/views/hotel/ibis/food/food').then(module => {
        resolve(module)
    })
}
const ibisMeeting = resolve => {
    import('@/views/hotel/ibis/meeting/meeting').then(module => {
        resolve(module)
    })
}
const ibisIntro = resolve => {
    import('@/views/hotel/ibis/intro/intro').then(module => {
        resolve(module)
    })
}
const ibisTraffic = resolve => {
    import('@/views/hotel/ibis/traffic/traffic').then(module => {
        resolve(module)
    })
}
const ibisScenicSpot = resolve => {
    import('@/views/hotel/ibis/scenicSpot/scenicSpot').then(module => {
        resolve(module)
    })
}
const ramadaIndex = resolve => {
    import('@/views/hotel/ramada/index/index').then(module => {
        resolve(module)
    })
}
const ramadaRoom = resolve => {
    import('@/views/hotel/ramada/room/room').then(module => {
        resolve(module)
    })
}
const ramadaFood = resolve => {
    import('@/views/hotel/ramada/food/food').then(module => {
        resolve(module)
    })
}
const ramadaMeeting = resolve => {
    import('@/views/hotel/ramada/meeting/meeting').then(module => {
        resolve(module)
    })
}
const ramadaIntro = resolve => {
    import('@/views/hotel/ramada/intro/intro').then(module => {
        resolve(module)
    })
}
const ramadaTraffic = resolve => {
    import('@/views/hotel/ramada/traffic/traffic').then(module => {
        resolve(module)
    })
}
const ramadaScenicSpot = resolve => {
    import('@/views/hotel/ramada/scenicSpot/scenicSpot').then(module => {
        resolve(module)
    })
}
const ramadaFacility = resolve => {
    import('@/views/hotel/ramada/facility/facility').then(module => {
        resolve(module)
    })
}
const FAQ = resolve => {
    import('@/views/service/FAQ/FAQ').then(module => {
        resolve(module)
    })
}
const strategy = resolve => {
    import('@/views/strategy/strategy/strategy').then(module => {
        resolve(module)
    })
}
const strategyDetail = resolve => {
    import('@/views/strategy/strategy/detail').then(module => {
        resolve(module)
    })
}
const activity = resolve => {
    import('@/views/activity/activity').then(module => {
        resolve(module)
    })
}
const activityDetail = resolve => {
    import('@/views/activity/detail').then(module => {
        resolve(module)
    })
}
const aboutUs = resolve => {
    import('@/views/aboutUs/aboutUs').then(module => {
        resolve(module)
    })
}
const news = resolve => {
    import('@/views/service/news/news').then(module => {
        resolve(module)
    })
}
const newsDetail = resolve => {
    import('@/views/service/news/detail').then(module => {
        resolve(module)
    })
}
const contactUs = resolve => {
    import('@/views/service/contactUs/contactUs').then(module => {
        resolve(module)
    })
}
const Dining = resolve => {
    import('@/views/Dining/Dining').then(module => {
        resolve(module)
    })
}
const notice = resolve => {
    import('@/views/service/notice/notice').then(module => {
        resolve(module)
    })
}
const traffic = resolve => {
    import('@/views/strategy/traffic/traffic').then(module => {
        resolve(module)
    })
}
const consult = resolve => {
    import('@/views/strategy/consult/consult').then(module => {
        resolve(module)
    })
}
const ticket = resolve => {
    import('@/views/service/ticket/ticket').then(module => {
        resolve(module)
    })
}
const tips = resolve => {
    import('@/views/service/tips/tips').then(module => {
        resolve(module)
    })
}
const searchResult = resolve => {
    import('@/views/search/result').then(module => {
        resolve(module)
    })
}




export default new Router({
    mode: "history",
    routes: [
        { path: '*', component: home },
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/service/FAQ',
            name: 'FAQ',
            component: FAQ
        },
        {
            path: '/strategy/strategy',
            name: 'strategy',
            component: strategy,
            children: [{
                path: "/strategy/strategy/detail",
                name: "strategyDetail",
                component: strategyDetail
            }]
        },
        {
            path: '/strategyDetail',
            name: 'recommendStrategy',
            component: strategyDetail
        },
        {
            path: '/activity',
            name: 'activity',
            component: activity,
            children: [{
                path: "/activity/detail",
                name: "activityDetail",
                component: activityDetail
            }]
        },
        {
            path: '/activityDetail',
            name: 'recommendActivity',
            component: activityDetail
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        },
        {
            path: '/service/contactUs',
            name: 'contactUs',
            component: contactUs
        },
        {
            path: '/service/tips',
            name: 'tips',
            component: tips
        },
        {
            path: '/Dining',
            name: 'Dining',
            component: Dining
        },
        {
            path: '/service/notice',
            name: 'notice',
            component: notice
        },
        {
            path: '/strategy/traffic',
            name: 'traffic',
            component: traffic
        },
        {
            path: '/strategy/consult',
            name: 'consult',
            component: consult
        },
        {
            path: '/service/ticket',
            name: 'ticket',
            component: ticket
        },
        {
            path: '/service/news',
            name: 'news',
            component: news,
            children: [{
                path: "/service/news/detail",
                name: "newsDetail",
                component: newsDetail
            }]
        },
        {
            path: '/park/forestWorld/forestWorld',
            name: 'forestWorld',
            component: forestWorld
        },
        {
            path: '/park/index',
            name: 'parkIndex',
            component: parkIndex
        },
        {
            path: '/park/forestWorld/Dining',
            name: 'forestWorldDining',
            component: forestWorldDining
        },
        {
            path: '/park/forestWorld/aboutUs',
            name: 'forestWorldAboutUs',
            component: forestWorldAboutUs
        },
        {
            path: '/park/forestWorld/map',
            name: 'forestWorldMap',
            component: forestWorldMap
        },
        {
            path: '/park/waterPark/waterPark',
            name: 'waterPark',
            component: waterPark
        },
        {
            path: '/park/waterPark/Dining',
            name: 'waterParkDining',
            component: waterParkDining
        },
        {
            path: '/park/waterPark/aboutUs',
            name: 'waterParkAboutUs',
            component: waterParkAboutUs
        },
        {
            path: '/park/waterPark/map',
            name: 'waterParkMap',
            component: waterParkMap
        },
        {
            path: '/park/waterPark/ecoVillage',
            name: 'ecoVillage',
            component: ecoVillage
        },
        {
            path: '/park/waterWorld/waterWorld',
            name: 'waterWorld',
            component: waterWorld
        },
        {
            path: '/park/waterWorld/Dining',
            name: 'waterWorldDining',
            component: waterWorldDining
        },
        {
            path: '/park/waterWorld/aboutUs',
            name: 'waterWorldAboutUs',
            component: waterWorldAboutUs
        },
        {
            path: '/park/waterWorld/map',
            name: 'waterWorldMap',
            component: waterWorldMap
        },
        {
            path: '/park/forestTown/forestTown',
            name: 'forestTown',
            component: forestTown
        },
        {
            path: '/park/forestTown/Dining',
            name: 'forestTownDining',
            component: forestTownDining
        },
        {
            path: '/park/forestTown/aboutUs',
            name: 'forestTownAboutUs',
            component: forestTownAboutUs
        },
        {
            path: '/park/forestTown/map',
            name: 'forestTownMap',
            component: forestTownMap
        },
        {
            path: '/park/suxiansen/suxiansen',
            name: 'suxiansen',
            component: suxiansen
        },
        {
            path: '/park/facility',
            name: 'facility',
            component: facility,
            children: [{
                path: "/park/facility/detail",
                name: "facilityDetail",
                component: facilityDetail
            }]
        },
        {
            path: '/facilityDetail',
            name: 'recommendFacility',
            component: facilityDetail
        },
        {
            path: '/hotel/index',
            name: 'hotelIndex',
            component: hotelIndex
        },
        {
            path: '/hotel/resortHotel/index',
            name: 'resortHotelIndex',
            component: resortHotelIndex,
            children: [
                {
                    path: "/hotel/resortHotel/room",
                    name: "resortHotelRoom",
                    component: resortHotelRoom
                },
                {
                    path: "/hotel/resortHotel/food",
                    name: "resortHotelFood",
                    component: resortHotelFood
                },
                {
                    path: "/hotel/resortHotel/meeting",
                    name: "resortHotelMeeting",
                    component: resortHotelMeeting
                },
                {
                    path: "/hotel/resortHotel/intro",
                    name: "resortHotelIntro",
                    component: resortHotelIntro
                },
                {
                    path: "/hotel/resortHotel/traffic",
                    name: "resortHotelTraffic",
                    component: resortHotelTraffic
                },
                {
                    path: "/hotel/resortHotel/scenicSpot",
                    name: "resortHotelScenicSpot",
                    component: resortHotelScenicSpot
                }
            ]
        },
        {
            path: '/hotel/ibis/index',
            name: 'ibisIndex',
            component: ibisIndex,
            children: [
                {
                    path: "/hotel/ibis/room",
                    name: "ibisRoom",
                    component: ibisRoom
                },
                {
                    path: "/hotel/ibis/food",
                    name: "ibisFood",
                    component: ibisFood
                },
                {
                    path: "/hotel/ibis/meeting",
                    name: "ibisMeeting",
                    component: ibisMeeting
                },
                {
                    path: "/hotel/ibis/intro",
                    name: "ibisIntro",
                    component: ibisIntro
                },
                {
                    path: "/hotel/ibis/traffic",
                    name: "ibisTraffic",
                    component: ibisTraffic
                },
                {
                    path: "/hotel/ibis/scenicSpot",
                    name: "ibisScenicSpot",
                    component: ibisScenicSpot
                }
            ]
        },
        {
            path: '/hotel/ramada/index',
            name: 'ramadaIndex',
            component: ramadaIndex,
            children: [
                {
                    path: "/hotel/ramada/room",
                    name: "ramadaRoom",
                    component: ramadaRoom
                },
                {
                    path: "/hotel/ramada/food",
                    name: "ramadaFood",
                    component: ramadaFood
                },
                {
                    path: "/hotel/ramada/meeting",
                    name: "ramadaMeeting",
                    component: ramadaMeeting
                },
                {
                    path: "/hotel/ramada/intro",
                    name: "ramadaIntro",
                    component: ramadaIntro
                },
                {
                    path: "/hotel/ramada/traffic",
                    name: "ramadaTraffic",
                    component: ramadaTraffic
                },
                {
                    path: "/hotel/ramada/scenicSpot",
                    name: "ramadaScenicSpot",
                    component: ramadaScenicSpot
                },
                {
                    path: "/hotel/ramada/facility",
                    name: "ramadaFacility",
                    component: ramadaFacility
                }
            ]
        },
        {
            path: "/search/result",
            name: "searchResult",
            component: searchResult,
            children: [
                {
                    path: "/search/newsDetail",
                    name: "searchNewsDetail",
                    component: newsDetail
                },
                {
                    path: "/search/activityDetail",
                    name: "searchActivityDetail",
                    component: activityDetail
                },
                {
                    path: "/search/strategyDetail",
                    name: "searchStrategyDetail",
                    component: strategyDetail
                },
                {
                    path: "/search/facilityDetail",
                    name: "searchFacilityDetail",
                    component: facilityDetail
                }
            ]
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        /* if(from.fullPath.indexOf("type") > -1) {
            return { x: 0, y: 0 }
        } */
        if( (from.path == "/hotel/resortHotel/index" || from.path == "/hotel/ibis/index" || from.path == "/hotel/ramada/index") && (to.path == "/hotel/resortHotel/index" || to.path == "/hotel/ibis/index" || to.path == "/hotel/ramada/index") ) {
            return { x: 0, y: 0 }
        }
        if( (from.path == "/hotel/resortHotel/index" || from.path == "/hotel/ibis/index" || from.path == "/hotel/ramada/index") && to.path.indexOf("hotel") > -1 ) {
            return
        }
        if( from.path == "/search/result" && to.path.indexOf("search") > -1 ) {
            return
        }
        if((from.path == "/activity" || from.path == "/park/facility" || from.path == "/service/news" || from.path == "/strategy/strategy") && to.fullPath.indexOf("detail") > -1) {
            return
        }
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
        }
	}
})
