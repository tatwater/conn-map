function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(41.378996, -72.106856),
    zoom: 18, //16
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  var abbeyCoords = [
    new google.maps.LatLng(41.377975, -72.102850),
    new google.maps.LatLng(41.377951, -72.102999),
    new google.maps.LatLng(41.377731, -72.102923),
    new google.maps.LatLng(41.377758, -72.102791),
    new google.maps.LatLng(41.377806, -72.102808),
    new google.maps.LatLng(41.377804, -72.102831),
    new google.maps.LatLng(41.377917, -72.102868),
    new google.maps.LatLng(41.377923, -72.102839),
    new google.maps.LatLng(41.377975, -72.102850)
  ];
  var beckerCoords = [
    new google.maps.LatLng(41.381586, -72.105091),
    new google.maps.LatLng(41.381547, -72.105325),
    new google.maps.LatLng(41.381510, -72.105315),
    new google.maps.LatLng(41.381488, -72.105432),
    new google.maps.LatLng(41.381352, -72.105379),
    new google.maps.LatLng(41.381385, -72.105212),
    new google.maps.LatLng(41.381245, -72.105162),
    new google.maps.LatLng(41.381286, -72.104988),
    new google.maps.LatLng(41.381586, -72.105091)
  ];
  var billCoords = [
    new google.maps.LatLng(41.377926, -72.105015),
    new google.maps.LatLng(41.377909, -72.105103),
    new google.maps.LatLng(41.377920, -72.105106),
    new google.maps.LatLng(41.377875, -72.105339),
    new google.maps.LatLng(41.377862, -72.105333),
    new google.maps.LatLng(41.377843, -72.105429),
    new google.maps.LatLng(41.377621, -72.105357),
    new google.maps.LatLng(41.377641, -72.105255),
    new google.maps.LatLng(41.377696, -72.105273),
    new google.maps.LatLng(41.377752, -72.104960),
    new google.maps.LatLng(41.377926, -72.105015)
  ];
  var blackstoneCoords = [
    new google.maps.LatLng(41.379766, -72.105513),
    new google.maps.LatLng(41.379734, -72.105670),
    new google.maps.LatLng(41.379686, -72.105652),
    new google.maps.LatLng(41.379686, -72.105636),
    new google.maps.LatLng(41.379600, -72.105611),
    new google.maps.LatLng(41.379597, -72.105642),
    new google.maps.LatLng(41.379537, -72.105622),
    new google.maps.LatLng(41.379537, -72.105599),
    new google.maps.LatLng(41.379503, -72.105587),
    new google.maps.LatLng(41.379501, -72.105570),
    new google.maps.LatLng(41.379470, -72.105558),
    new google.maps.LatLng(41.379471, -72.105571),
    new google.maps.LatLng(41.379419, -72.105554),
    new google.maps.LatLng(41.379439, -72.105383),
    new google.maps.LatLng(41.379766, -72.105513)
  ];
  var blausteinCoords = [
    new google.maps.LatLng(41.379511, -72.106880),
    new google.maps.LatLng(41.379468, -72.107084),
    new google.maps.LatLng(41.379355, -72.107037),
    new google.maps.LatLng(41.379359, -72.107016),
    new google.maps.LatLng(41.379285, -72.106988),
    new google.maps.LatLng(41.379257, -72.107117),
    new google.maps.LatLng(41.379280, -72.107126),
    new google.maps.LatLng(41.379252, -72.107260),
    new google.maps.LatLng(41.379071, -72.107190),
    new google.maps.LatLng(41.379100, -72.107057),
    new google.maps.LatLng(41.379124, -72.107065),
    new google.maps.LatLng(41.379212, -72.106650),
    new google.maps.LatLng(41.379190, -72.106639),
    new google.maps.LatLng(41.379218, -72.106506),
    new google.maps.LatLng(41.379398, -72.106575),
    new google.maps.LatLng(41.379369, -72.106710),
    new google.maps.LatLng(41.379346, -72.106699),
    new google.maps.LatLng(41.379321, -72.106830),
    new google.maps.LatLng(41.379394, -72.106858),
    new google.maps.LatLng(41.379398, -72.106836),
    new google.maps.LatLng(41.379511, -72.106880)
  ];
  var branfordCoords = [
    new google.maps.LatLng(41.380121, -72.106088),
    new google.maps.LatLng(41.380098, -72.106237),
    new google.maps.LatLng(41.380085, -72.106232),
    new google.maps.LatLng(41.380079, -72.106252),
    new google.maps.LatLng(41.380043, -72.106238),
    new google.maps.LatLng(41.380046, -72.106214),
    new google.maps.LatLng(41.379925, -72.106170),
    new google.maps.LatLng(41.379918, -72.106207),
    new google.maps.LatLng(41.379720, -72.106130),
    new google.maps.LatLng(41.379749, -72.105965),
    new google.maps.LatLng(41.380121, -72.106088)
  ];
  var celsCoords = [
    new google.maps.LatLng(41.378859, -72.103430),
    new google.maps.LatLng(41.378834, -72.103563),
    new google.maps.LatLng(41.378650, -72.103478),
    new google.maps.LatLng(41.378673, -72.103351),
    new google.maps.LatLng(41.378859, -72.103430)
  ];
  var chapelCoords = [
    new google.maps.LatLng(41.379160, -72.108361),
    new google.maps.LatLng(41.379132, -72.108510),
    new google.maps.LatLng(41.379026, -72.108466),
    new google.maps.LatLng(41.379019, -72.108497),
    new google.maps.LatLng(41.378743, -72.108398),
    new google.maps.LatLng(41.378783, -72.108188),
    new google.maps.LatLng(41.379053, -72.108292),
    new google.maps.LatLng(41.379049, -72.108314),
    new google.maps.LatLng(41.379160, -72.108361)
  ];
  var croCoords = [
    new google.maps.LatLng(41.381590, -72.107193),
    new google.maps.LatLng(41.381551, -72.107390),
    new google.maps.LatLng(41.381369, -72.107342),
    new google.maps.LatLng(41.381362, -72.107380),
    new google.maps.LatLng(41.381477, -72.107417),
    new google.maps.LatLng(41.381397, -72.107824),
    new google.maps.LatLng(41.380964, -72.107681),
    new google.maps.LatLng(41.381033, -72.107280),
    new google.maps.LatLng(41.380951, -72.107252),
    new google.maps.LatLng(41.380940, -72.107300),
    new google.maps.LatLng(41.380877, -72.107279),
    new google.maps.LatLng(41.380887, -72.107227),
    new google.maps.LatLng(41.380857, -72.107210),
    new google.maps.LatLng(41.380886, -72.107066),
    new google.maps.LatLng(41.380915, -72.107077),
    new google.maps.LatLng(41.380927, -72.107030),
    new google.maps.LatLng(41.381125, -72.107105),
    new google.maps.LatLng(41.381110, -72.107156),
    new google.maps.LatLng(41.381265, -72.107208),
    new google.maps.LatLng(41.381284, -72.107095),
    new google.maps.LatLng(41.381590, -72.107193)
  ];
  var cummingsCoords = [
    new google.maps.LatLng(41.376822, -72.104625),
    new google.maps.LatLng(41.376732, -72.105067),
    new google.maps.LatLng(41.376189, -72.104871),
    new google.maps.LatLng(41.376279, -72.104430),
    new google.maps.LatLng(41.376822, -72.104625)
  ];
  var daytonCoords = [
    new google.maps.LatLng(41.382782, -72.103098),
    new google.maps.LatLng(41.382734, -72.103303),
    new google.maps.LatLng(41.382575, -72.103244),
    new google.maps.LatLng(41.382517, -72.103453),
    new google.maps.LatLng(41.381889, -72.103227),
    new google.maps.LatLng(41.381963, -72.102846),
    new google.maps.LatLng(41.382613, -72.103068),
    new google.maps.LatLng(41.382621, -72.103031),
    new google.maps.LatLng(41.382782, -72.103098)
  ];
  var fanningCoords = [
    new google.maps.LatLng(41.378630, -72.105061),
    new google.maps.LatLng(41.378596, -72.105250),
    new google.maps.LatLng(41.378159, -72.105112),
    new google.maps.LatLng(41.378191, -72.104926),
    new google.maps.LatLng(41.378630, -72.105061)
  ];
  var fitnessCenterCoords = [
    new google.maps.LatLng(41.381898, -72.102516),
    new google.maps.LatLng(41.381852, -72.102748),
    new google.maps.LatLng(41.381822, -72.102739),
    new google.maps.LatLng(41.381816, -72.102768),
    new google.maps.LatLng(41.381656, -72.102726),
    new google.maps.LatLng(41.381643, -72.102622),
    new google.maps.LatLng(41.381678, -72.102594),
    new google.maps.LatLng(41.381713, -72.102607),
    new google.maps.LatLng(41.381755, -72.102370),
    new google.maps.LatLng(41.381888, -72.102415),
    new google.maps.LatLng(41.381879, -72.102507),
    new google.maps.LatLng(41.381898, -72.102516)
  ];
  var haleCoords = [
    new google.maps.LatLng(41.379809, -72.104980),
    new google.maps.LatLng(41.379776, -72.105191),
    new google.maps.LatLng(41.379421, -72.105076),
    new google.maps.LatLng(41.379441, -72.104984),
    new google.maps.LatLng(41.379382, -72.104962),
    new google.maps.LatLng(41.379387, -72.104933),
    new google.maps.LatLng(41.379304, -72.104905),
    new google.maps.LatLng(41.379324, -72.104795),
    new google.maps.LatLng(41.379442, -72.104842),
    new google.maps.LatLng(41.379452, -72.104788),
    new google.maps.LatLng(41.379587, -72.104832),
    new google.maps.LatLng(41.379576, -72.104902),
    new google.maps.LatLng(41.379809, -72.104980)
  ];
  var hamiltonCoords = [
    new google.maps.LatLng(41.383447, -72.107674),
    new google.maps.LatLng(41.383397, -72.107938),
    new google.maps.LatLng(41.383079, -72.107831),
    new google.maps.LatLng(41.383115, -72.107574),
    new google.maps.LatLng(41.383234, -72.107603),
    new google.maps.LatLng(41.383244, -72.107560),
    new google.maps.LatLng(41.383277, -72.107572),
    new google.maps.LatLng(41.383269, -72.107617),
    new google.maps.LatLng(41.383447, -72.107674)
  ];
  var harrisCoords = [
    new google.maps.LatLng(41.382838, -72.107805),
    new google.maps.LatLng(41.382725, -72.108373),
    new google.maps.LatLng(41.382508, -72.108298),
    new google.maps.LatLng(41.382615, -72.107722),
    new google.maps.LatLng(41.382838, -72.107805)
  ];
  var harknessCoords = [
    new google.maps.LatLng(41.377664, -72.107188),
    new google.maps.LatLng(41.377616, -72.107409),
    new google.maps.LatLng(41.377194, -72.107242),
    new google.maps.LatLng(41.377241, -72.107023),
    new google.maps.LatLng(41.377347, -72.107064),
    new google.maps.LatLng(41.377331, -72.107133),
    new google.maps.LatLng(41.377537, -72.107214),
    new google.maps.LatLng(41.377553, -72.107144),
    new google.maps.LatLng(41.377664, -72.107188)
  ];
  var horizonCoords = [
    new google.maps.LatLng(41.377079, -72.107707),
    new google.maps.LatLng(41.377076, -72.107734),
    new google.maps.LatLng(41.377067, -72.107751),
    new google.maps.LatLng(41.377050, -72.107765),
    new google.maps.LatLng(41.377033, -72.107853),
    new google.maps.LatLng(41.377047, -72.107876),
    new google.maps.LatLng(41.377042, -72.107909),
    new google.maps.LatLng(41.377032, -72.107923),
    new google.maps.LatLng(41.377013, -72.107936),
    new google.maps.LatLng(41.376989, -72.107925),
    new google.maps.LatLng(41.376980, -72.107907),
    new google.maps.LatLng(41.376958, -72.107901),
    new google.maps.LatLng(41.376933, -72.107915),
    new google.maps.LatLng(41.376905, -72.107901),
    new google.maps.LatLng(41.376894, -72.107874),
    new google.maps.LatLng(41.376905, -72.107823),
    new google.maps.LatLng(41.376913, -72.107820),
    new google.maps.LatLng(41.376936, -72.107717),
    new google.maps.LatLng(41.376925, -72.107694),
    new google.maps.LatLng(41.376936, -72.107649),
    new google.maps.LatLng(41.376953, -72.107638),
    new google.maps.LatLng(41.376979, -72.107650),
    new google.maps.LatLng(41.376992, -72.107680),
    new google.maps.LatLng(41.377013, -72.107691),
    new google.maps.LatLng(41.377019, -72.107672),
    new google.maps.LatLng(41.377037, -72.107661),
    new google.maps.LatLng(41.377064, -72.107673),
    new google.maps.LatLng(41.377079, -72.107707)
  ];
  var jaFreemanCoords = [
    new google.maps.LatLng(41.376910, -72.106880),
    new google.maps.LatLng(41.376869, -72.107120),
    new google.maps.LatLng(41.376579, -72.107028),
    new google.maps.LatLng(41.376569, -72.107088),
    new google.maps.LatLng(41.376454, -72.107051),
    new google.maps.LatLng(41.376458, -72.107028),
    new google.maps.LatLng(41.376413, -72.107013),
    new google.maps.LatLng(41.376408, -72.106956),
    new google.maps.LatLng(41.376414, -72.106920),
    new google.maps.LatLng(41.376446, -72.106851),
    new google.maps.LatLng(41.376484, -72.106862),
    new google.maps.LatLng(41.376521, -72.106642),
    new google.maps.LatLng(41.376352, -72.106587),
    new google.maps.LatLng(41.376342, -72.106634),
    new google.maps.LatLng(41.376225, -72.106597),
    new google.maps.LatLng(41.376258, -72.106414),
    new google.maps.LatLng(41.376403, -72.106457),
    new google.maps.LatLng(41.376407, -72.106430),
    new google.maps.LatLng(41.376525, -72.106468),
    new google.maps.LatLng(41.376521, -72.106491),
    new google.maps.LatLng(41.376670, -72.106538),
    new google.maps.LatLng(41.376612, -72.106868),
    new google.maps.LatLng(41.376788, -72.106923),
    new google.maps.LatLng(41.376802, -72.106846),
    new google.maps.LatLng(41.376910, -72.106880)
  ];
  var johnsonCoords = [
    new google.maps.LatLng(41.383226, -72.108608),
    new google.maps.LatLng(41.383193, -72.108787),
    new google.maps.LatLng(41.382860, -72.108700),
    new google.maps.LatLng(41.382895, -72.108506),
    new google.maps.LatLng(41.382924, -72.108513),
    new google.maps.LatLng(41.382932, -72.108477),
    new google.maps.LatLng(41.382965, -72.108486),
    new google.maps.LatLng(41.382959, -72.108525),
    new google.maps.LatLng(41.383226, -72.108608)
  ];
  var kbLarrabeeCoords = [
    new google.maps.LatLng(41.381946, -72.106494),
    new google.maps.LatLng(41.381901, -72.106753),
    new google.maps.LatLng(41.381810, -72.106720),
    new google.maps.LatLng(41.381821, -72.106661),
    new google.maps.LatLng(41.381798, -72.106653),
    new google.maps.LatLng(41.381794, -72.106678),
    new google.maps.LatLng(41.381616, -72.106613),
    new google.maps.LatLng(41.381602, -72.106671),
    new google.maps.LatLng(41.381513, -72.106645),
    new google.maps.LatLng(41.381514, -72.106623),
    new google.maps.LatLng(41.381457, -72.106604),
    new google.maps.LatLng(41.381461, -72.106490),
    new google.maps.LatLng(41.381467, -72.106456),
    new google.maps.LatLng(41.381476, -72.106430),
    new google.maps.LatLng(41.381544, -72.106450),
    new google.maps.LatLng(41.381583, -72.106242),
    new google.maps.LatLng(41.381504, -72.106210),
    new google.maps.LatLng(41.381479, -72.106317),
    new google.maps.LatLng(41.381412, -72.106289),
    new google.maps.LatLng(41.381425, -72.106220),
    new google.maps.LatLng(41.381373, -72.106196),
    new google.maps.LatLng(41.381384, -72.106136),
    new google.maps.LatLng(41.381391, -72.106140),
    new google.maps.LatLng(41.381406, -72.106073),
    new google.maps.LatLng(41.381542, -72.106125),
    new google.maps.LatLng(41.381532, -72.106180),
    new google.maps.LatLng(41.381590, -72.106203),
    new google.maps.LatLng(41.381646, -72.105951),
    new google.maps.LatLng(41.381597, -72.105923),
    new google.maps.LatLng(41.381628, -72.105780),
    new google.maps.LatLng(41.381815, -72.105856),
    new google.maps.LatLng(41.381784, -72.106009),
    new google.maps.LatLng(41.381746, -72.105998),
    new google.maps.LatLng(41.381684, -72.106309),
    new google.maps.LatLng(41.381701, -72.106317),
    new google.maps.LatLng(41.381673, -72.106478),
    new google.maps.LatLng(41.381837, -72.106535),
    new google.maps.LatLng(41.381853, -72.106455),
    new google.maps.LatLng(41.381946, -72.106494)
  ];
  var knowltonCoords = [
    new google.maps.LatLng(41.378464, -72.107424),
    new google.maps.LatLng(41.378424, -72.107623),
    new google.maps.LatLng(41.377958, -72.107454),
    new google.maps.LatLng(41.377998, -72.107257),
    new google.maps.LatLng(41.378464, -72.107424)
  ];
  var lambdinCoords = [
    new google.maps.LatLng(41.383029, -72.107605),
    new google.maps.LatLng(41.383023, -72.107643),
    new google.maps.LatLng(41.383036, -72.107650),
    new google.maps.LatLng(41.383015, -72.107789),
    new google.maps.LatLng(41.382993, -72.107779),
    new google.maps.LatLng(41.382982, -72.107847),
    new google.maps.LatLng(41.382703, -72.107727),
    new google.maps.LatLng(41.382747, -72.107508),
    new google.maps.LatLng(41.383029, -72.107605)
  ];
  var lazarusCoords = [
    new google.maps.LatLng(41.380282, -72.108667),
    new google.maps.LatLng(41.380267, -72.108746),
    new google.maps.LatLng(41.380240, -72.108740),
    new google.maps.LatLng(41.380235, -72.108764),
    new google.maps.LatLng(41.380050, -72.108697),
    new google.maps.LatLng(41.380071, -72.108590),
    new google.maps.LatLng(41.380153, -72.108616),
    new google.maps.LatLng(41.380173, -72.108501),
    new google.maps.LatLng(41.380249, -72.108526),
    new google.maps.LatLng(41.380230, -72.108645),
    new google.maps.LatLng(41.380282, -72.108667)
  ];
  var mobrocCoords = [
    new google.maps.LatLng(41.381563, -72.108477),
    new google.maps.LatLng(41.381534, -72.108625),
    new google.maps.LatLng(41.381478, -72.108604),
    new google.maps.LatLng(41.381522, -72.108392),
    new google.maps.LatLng(41.381564, -72.108409),
    new google.maps.LatLng(41.381552, -72.108471),
    new google.maps.LatLng(41.381563, -72.108477)
  ];
  var morrisonCoords = [
    new google.maps.LatLng(41.382629, -72.107587),
    new google.maps.LatLng(41.382585, -72.107793),
    new google.maps.LatLng(41.382535, -72.107774),
    new google.maps.LatLng(41.382529, -72.107794),
    new google.maps.LatLng(41.382256, -72.107687),
    new google.maps.LatLng(41.382301, -72.107462),
    new google.maps.LatLng(41.382559, -72.107558),
    new google.maps.LatLng(41.382569, -72.107507),
    new google.maps.LatLng(41.382601, -72.107521),
    new google.maps.LatLng(41.382593, -72.107572),
    new google.maps.LatLng(41.382629, -72.107587)
  ];
  var newLondonCoords = [
    new google.maps.LatLng(41.379215, -72.105225),
    new google.maps.LatLng(41.379190, -72.105366),
    new google.maps.LatLng(41.379106, -72.105337),
    new google.maps.LatLng(41.379071, -72.105537),
    new google.maps.LatLng(41.379104, -72.105546),
    new google.maps.LatLng(41.379094, -72.105603),
    new google.maps.LatLng(41.379062, -72.105592),
    new google.maps.LatLng(41.379021, -72.105828),
    new google.maps.LatLng(41.378841, -72.105770),
    new google.maps.LatLng(41.378852, -72.105709),
    new google.maps.LatLng(41.378718, -72.105667),
    new google.maps.LatLng(41.378700, -72.105757),
    new google.maps.LatLng(41.378626, -72.105728),
    new google.maps.LatLng(41.378643, -72.105643),
    new google.maps.LatLng(41.378627, -72.105637),
    new google.maps.LatLng(41.378645, -72.105539),
    new google.maps.LatLng(41.378667, -72.105549),
    new google.maps.LatLng(41.378686, -72.105439),
    new google.maps.LatLng(41.378759, -72.105465),
    new google.maps.LatLng(41.378740, -72.105572),
    new google.maps.LatLng(41.378887, -72.105618),
    new google.maps.LatLng(41.378909, -72.105495),
    new google.maps.LatLng(41.378889, -72.105487),
    new google.maps.LatLng(41.378913, -72.105352),
    new google.maps.LatLng(41.378972, -72.105370),
    new google.maps.LatLng(41.379009, -72.105160),
    new google.maps.LatLng(41.379215, -72.105225)
  ];
  var olinCoords = [
    new google.maps.LatLng(41.379225, -72.104674),
    new google.maps.LatLng(41.379162, -72.104984),
    new google.maps.LatLng(41.378886, -72.104886),
    new google.maps.LatLng(41.378937, -72.104566),
    new google.maps.LatLng(41.379225, -72.104674)
  ];
  var palmerCoords = [
    new google.maps.LatLng(41.377453, -72.104748),
    new google.maps.LatLng(41.377431, -72.104858),
    new google.maps.LatLng(41.377459, -72.104867),
    new google.maps.LatLng(41.377393, -72.105170),
    new google.maps.LatLng(41.377365, -72.105158),
    new google.maps.LatLng(41.377342, -72.105264),
    new google.maps.LatLng(41.377075, -72.105159),
    new google.maps.LatLng(41.377086, -72.105097),
    new google.maps.LatLng(41.377056, -72.105085),
    new google.maps.LatLng(41.377112, -72.104786),
    new google.maps.LatLng(41.377120, -72.104790),
    new google.maps.LatLng(41.377140, -72.104690),
    new google.maps.LatLng(41.377161, -72.104698),
    new google.maps.LatLng(41.377172, -72.104643),
    new google.maps.LatLng(41.377453, -72.104748)
  ];
  var parkCoords = [
    new google.maps.LatLng(41.382794, -72.108465),
    new google.maps.LatLng(41.382754, -72.108661),
    new google.maps.LatLng(41.382426, -72.108544),
    new google.maps.LatLng(41.382460, -72.108342),
    new google.maps.LatLng(41.382794, -72.108465)
  ];
  var plantCoords = [
    new google.maps.LatLng(41.379679, -72.105947),
    new google.maps.LatLng(41.379655, -72.106100),
    new google.maps.LatLng(41.379574, -72.106070),
    new google.maps.LatLng(41.379572, -72.106083),
    new google.maps.LatLng(41.379467, -72.106045),
    new google.maps.LatLng(41.379469, -72.106028),
    new google.maps.LatLng(41.379379, -72.105995),
    new google.maps.LatLng(41.379379, -72.106006),
    new google.maps.LatLng(41.379330, -72.105990),
    new google.maps.LatLng(41.379359, -72.105827),
    new google.maps.LatLng(41.379679, -72.105947)
  ];
  var powerHouseCoords = [
    new google.maps.LatLng(41.380240, -72.104969),
    new google.maps.LatLng(41.380213, -72.105106),
    new google.maps.LatLng(41.379979, -72.105028),
    new google.maps.LatLng(41.380012, -72.104864),
    new google.maps.LatLng(41.380212, -72.104938),
    new google.maps.LatLng(41.380209, -72.104956),
    new google.maps.LatLng(41.380240, -72.104969)
  ];
  var ridgeCoords = [
    new google.maps.LatLng(41.376826, -72.102308),
    new google.maps.LatLng(41.376826, -72.102431),
    new google.maps.LatLng(41.376768, -72.102433),
    new google.maps.LatLng(41.376768, -72.102398),
    new google.maps.LatLng(41.376657, -72.102398),
    new google.maps.LatLng(41.376657, -72.102363),
    new google.maps.LatLng(41.376549, -72.102364),
    new google.maps.LatLng(41.376549, -72.102325),
    new google.maps.LatLng(41.376440, -72.102325),
    new google.maps.LatLng(41.376439, -72.102294),
    new google.maps.LatLng(41.376330, -72.102294),
    new google.maps.LatLng(41.376329, -72.102259),
    new google.maps.LatLng(41.376220, -72.102258),
    new google.maps.LatLng(41.376220, -72.102225),
    new google.maps.LatLng(41.376112, -72.102223),
    new google.maps.LatLng(41.376114, -72.102079),
    new google.maps.LatLng(41.376224, -72.102079),
    new google.maps.LatLng(41.376224, -72.102125),
    new google.maps.LatLng(41.376332, -72.102125),
    new google.maps.LatLng(41.376332, -72.102160),
    new google.maps.LatLng(41.376443, -72.102160),
    new google.maps.LatLng(41.376443, -72.102187),
    new google.maps.LatLng(41.376547, -72.102187),
    new google.maps.LatLng(41.376547, -72.102219),
    new google.maps.LatLng(41.376659, -72.102220),
    new google.maps.LatLng(41.376658, -72.102269),
    new google.maps.LatLng(41.376771, -72.102270),
    new google.maps.LatLng(41.376771, -72.102307),
    new google.maps.LatLng(41.376826, -72.102308)
  ];
  var shainCoords = [
    new google.maps.LatLng(41.380056, -72.107116),
    new google.maps.LatLng(41.379976, -72.107543),
    new google.maps.LatLng(41.380085, -72.107579),
    new google.maps.LatLng(41.380060, -72.107731),
    new google.maps.LatLng(41.379701, -72.107613),
    new google.maps.LatLng(41.379721, -72.107534),
    new google.maps.LatLng(41.379607, -72.107499),
    new google.maps.LatLng(41.379600, -72.107524),
    new google.maps.LatLng(41.379575, -72.107519),
    new google.maps.LatLng(41.379583, -72.107488),
    new google.maps.LatLng(41.379504, -72.107464),
    new google.maps.LatLng(41.379596, -72.106966),
    new google.maps.LatLng(41.380056, -72.107116)
  ];
  var smithBurdickCoords = [
    new google.maps.LatLng(41.380867, -72.105929),
    new google.maps.LatLng(41.380842, -72.106054),
    new google.maps.LatLng(41.380705, -72.106010),
    new google.maps.LatLng(41.380658, -72.106246),
    new google.maps.LatLng(41.380568, -72.106207),
    new google.maps.LatLng(41.380564, -72.106241),
    new google.maps.LatLng(41.380610, -72.106265),
    new google.maps.LatLng(41.380603, -72.106309),
    new google.maps.LatLng(41.380665, -72.106336),
    new google.maps.LatLng(41.380645, -72.106425),
    new google.maps.LatLng(41.380401, -72.106336),
    new google.maps.LatLng(41.380429, -72.106201),
    new google.maps.LatLng(41.380470, -72.106212),
    new google.maps.LatLng(41.380521, -72.105947),
    new google.maps.LatLng(41.380368, -72.105894),
    // new google.maps.LatLng(41.380365, -72.105903),
    new google.maps.LatLng(41.380392, -72.105766),
    new google.maps.LatLng(41.380867, -72.105929)
  ];
  var tansillCoords = [
    new google.maps.LatLng(41.380183, -72.105256),
    new google.maps.LatLng(41.380149, -72.105454),
    new google.maps.LatLng(41.379862, -72.105358),
    new google.maps.LatLng(41.379875, -72.105232),
    new google.maps.LatLng(41.379918, -72.105243),
    new google.maps.LatLng(41.379931, -72.105176),
    new google.maps.LatLng(41.380183, -72.105256)
  ];
  var unityCoords = [
    new google.maps.LatLng(41.380954, -72.104964),
    new google.maps.LatLng(41.380938, -72.105086),
    new google.maps.LatLng(41.380943, -72.105090),
    new google.maps.LatLng(41.380918, -72.105237),
    new google.maps.LatLng(41.380826, -72.105204),
    new google.maps.LatLng(41.380847, -72.105075),
    new google.maps.LatLng(41.380808, -72.105058),
    new google.maps.LatLng(41.380823, -72.104931),
    new google.maps.LatLng(41.380954, -72.104964)
  ];
  var healthCenterCoords = [
    new google.maps.LatLng(41.379949, -72.107851),
    new google.maps.LatLng(41.379919, -72.108019),
    new google.maps.LatLng(41.379822, -72.107987),
    new google.maps.LatLng(41.379772, -72.108260),
    new google.maps.LatLng(41.379680, -72.108230),
    new google.maps.LatLng(41.379738, -72.107918),
    new google.maps.LatLng(41.379720, -72.107910),
    new google.maps.LatLng(41.379733, -72.107836),
    new google.maps.LatLng(41.379822, -72.107863),
    new google.maps.LatLng(41.379831, -72.107813),
    new google.maps.LatLng(41.379949, -72.107851)
  ];
  var windhamCoords = [
    new google.maps.LatLng(41.379357, -72.107782),
    new google.maps.LatLng(41.379315, -72.107998),
    new google.maps.LatLng(41.379220, -72.107963),
    new google.maps.LatLng(41.379226, -72.107918),
    new google.maps.LatLng(41.379101, -72.107865),
    new google.maps.LatLng(41.379093, -72.107899),
    new google.maps.LatLng(41.379057, -72.107888),
    new google.maps.LatLng(41.379053, -72.107924),
    new google.maps.LatLng(41.378961, -72.107886),
    new google.maps.LatLng(41.378998, -72.107650),
    new google.maps.LatLng(41.379357, -72.107782)
  ];
  var winthropCoords = [
    new google.maps.LatLng(41.382116, -72.105568),
    new google.maps.LatLng(41.382095, -72.105719),
    new google.maps.LatLng(41.381841, -72.105640),
    new google.maps.LatLng(41.381862, -72.105486),
    new google.maps.LatLng(41.382116, -72.105568)
  ];
  var winthropAnnexCoords = [
    new google.maps.LatLng(41.382356, -72.105954),
    new google.maps.LatLng(41.382347, -72.106047),
    new google.maps.LatLng(41.382093, -72.105964),
    new google.maps.LatLng(41.382113, -72.105893),
    new google.maps.LatLng(41.382356, -72.105954)
  ];
  var wrightCoords = [
    new google.maps.LatLng(41.382349, -72.108378),
    new google.maps.LatLng(41.382308, -72.108582),
    new google.maps.LatLng(41.381983, -72.108466),
    new google.maps.LatLng(41.382020, -72.108256),
    new google.maps.LatLng(41.382349, -72.108378)
  ];

  var abbey = new google.maps.Polygon({
    paths: abbeyCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var becker = new google.maps.Polygon({
    paths: beckerCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var bill = new google.maps.Polygon({
    paths: billCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var blackstone = new google.maps.Polygon({
    paths: blackstoneCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var blaustein = new google.maps.Polygon({
    paths: blausteinCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var branford = new google.maps.Polygon({
    paths: branfordCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var cels = new google.maps.Polygon({
    paths: celsCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var chapel = new google.maps.Polygon({
    paths: chapelCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var cro = new google.maps.Polygon({
    paths: croCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var cummings = new google.maps.Polygon({
    paths: cummingsCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var dayton = new google.maps.Polygon({
    paths: daytonCoords,
    strokeColor: '#375750',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#54867c', //teal
    fillOpacity: 1
  });
  var fanning = new google.maps.Polygon({
    paths: fanningCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var fitnessCenter = new google.maps.Polygon({
    paths: fitnessCenterCoords,
    strokeColor: '#375750',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#54867c', //teal
    fillOpacity: 1
  });
  var hale = new google.maps.Polygon({
    paths: haleCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var hamilton = new google.maps.Polygon({
    paths: hamiltonCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var harris = new google.maps.Polygon({
    paths: harrisCoords,
    strokeColor: '#4b5e7c',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e769c', //blue
    fillOpacity: 1
  });
  var harkness = new google.maps.Polygon({
    paths: harknessCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var horizon = new google.maps.Polygon({
    paths: horizonCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var jaFreeman = new google.maps.Polygon({
    paths: jaFreemanCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var johnson = new google.maps.Polygon({
    paths: johnsonCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var kbLarrabee = new google.maps.Polygon({
    paths: kbLarrabeeCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var knowlton = new google.maps.Polygon({
    paths: knowltonCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var lambdin = new google.maps.Polygon({
    paths: lambdinCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var lazarus = new google.maps.Polygon({
    paths: lazarusCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var mobroc = new google.maps.Polygon({
    paths: mobrocCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var morrison = new google.maps.Polygon({
    paths: morrisonCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var newLondon = new google.maps.Polygon({
    paths: newLondonCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var olin = new google.maps.Polygon({
    paths: olinCoords,
    strokeColor: '#6c4167',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c5e95', //purple
    fillOpacity: 1
  });
  var palmer = new google.maps.Polygon({
    paths: palmerCoords,
    strokeColor: '#676c41',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#959c5e', //gold
    fillOpacity: 1
  });
  var park = new google.maps.Polygon({
    paths: parkCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var plant = new google.maps.Polygon({
    paths: plantCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var powerHouse = new google.maps.Polygon({
    paths: powerHouseCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var ridge = new google.maps.Polygon({
    paths: ridgeCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var shain = new google.maps.Polygon({
    paths: shainCoords,
    strokeColor: '#526c41',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#769c5e', //light-green
    fillOpacity: 1
  });
  var smithBurdick = new google.maps.Polygon({
    paths: smithBurdickCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var tansill = new google.maps.Polygon({
    paths: tansillCoords,
    strokeColor: '#676c41',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#959c5e', //gold
    fillOpacity: 1
  });
  var unity = new google.maps.Polygon({
    paths: unityCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var healthCenter = new google.maps.Polygon({
    paths: healthCenterCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var windham = new google.maps.Polygon({
    paths: windhamCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });
  var winthrop = new google.maps.Polygon({
    paths: winthropCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var winthropAnnex = new google.maps.Polygon({
    paths: winthropAnnexCoords,
    strokeColor: '#09472f',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#5e9c84', //green
    fillOpacity: 1
  });
  var wright = new google.maps.Polygon({
    paths: wrightCoords,
    strokeColor: '#6c4641',
    strokeOpacity: 1,
    strokeWeight: .5,
    fillColor: '#9c655e', //red
    fillOpacity: 1
  });

  abbey.setMap(map);
  becker.setMap(map);
  bill.setMap(map);
  blackstone.setMap(map);
  blaustein.setMap(map);
  branford.setMap(map);
  cels.setMap(map);
  chapel.setMap(map);
  cro.setMap(map);
  cummings.setMap(map);
  dayton.setMap(map);
  fanning.setMap(map);
  fitnessCenter.setMap(map);
  hale.setMap(map);
  hamilton.setMap(map);
  harkness.setMap(map);
  harris.setMap(map);
  healthCenter.setMap(map);
  horizon.setMap(map);
  jaFreeman.setMap(map);
  johnson.setMap(map);
  kbLarrabee.setMap(map);
  knowlton.setMap(map);
  lambdin.setMap(map);
  lazarus.setMap(map);
  mobroc.setMap(map);
  morrison.setMap(map);
  newLondon.setMap(map);
  olin.setMap(map);
  palmer.setMap(map);
  park.setMap(map);
  plant.setMap(map);
  powerHouse.setMap(map);
  ridge.setMap(map);
  shain.setMap(map);
  smithBurdick.setMap(map);
  tansill.setMap(map);
  unity.setMap(map);
  windham.setMap(map);
  winthrop.setMap(map);
  winthropAnnex.setMap(map);
  wright.setMap(map);

  google.maps.event.addListener(abbey, 'click', function() {
    populateSidebar(abbeyInfo);
  });
  google.maps.event.addListener(becker, 'click', function() {
    populateSidebar(beckerInfo);
  });
  google.maps.event.addListener(bill, 'click', function() {
    populateSidebar(billInfo);
  });
  google.maps.event.addListener(blackstone, 'click', function() {
    populateSidebar(blackstoneInfo);
  });
  google.maps.event.addListener(blaustein, 'click', function() {
    populateSidebar(blausteinInfo);
  });
  google.maps.event.addListener(branford, 'click', function() {
    populateSidebar(branfordInfo);
  });
  google.maps.event.addListener(cels, 'click', function() {
    populateSidebar(celsInfo);
  });
  google.maps.event.addListener(chapel, 'click', function() {
    populateSidebar(chapelInfo);
  });
  google.maps.event.addListener(cro, 'click', function() {
    populateSidebar(croInfo);
  });
  google.maps.event.addListener(cummings, 'click', function() {
    populateSidebar(cummingsInfo);
  });
  google.maps.event.addListener(dayton, 'click', function() {
    populateSidebar(daytonInfo);
  });
  google.maps.event.addListener(fanning, 'click', function() {
    populateSidebar(fanningInfo);
  });
  google.maps.event.addListener(fitnessCenter, 'click', function() {
    populateSidebar(fitnessCenterInfo);
  });
  google.maps.event.addListener(hale, 'click', function() {
    populateSidebar(haleInfo);
  });
  google.maps.event.addListener(hamilton, 'click', function() {
    populateSidebar(hamiltonInfo);
  });
  google.maps.event.addListener(harris, 'click', function() {
    populateSidebar(harrisInfo);
  });
  google.maps.event.addListener(harkness, 'click', function() {
    populateSidebar(harknessInfo);
  });
  google.maps.event.addListener(horizon, 'click', function() {
    populateSidebar(horizonInfo);
  });
  google.maps.event.addListener(jaFreeman, 'click', function() {
    populateSidebar(jaFreemanInfo);
  });
  google.maps.event.addListener(johnson, 'click', function() {
    populateSidebar(johnsonInfo);
  });
  google.maps.event.addListener(kbLarrabee, 'click', function() {
    populateSidebar(kbLarrabeeInfo);
  });
  google.maps.event.addListener(knowlton, 'click', function() {
    populateSidebar(knowltonInfo);
  });
  google.maps.event.addListener(lazarus, 'click', function() {
    populateSidebar(lazarusInfo);
  });
  google.maps.event.addListener(lambdin, 'click', function() {
    populateSidebar(lambdinInfo);
  });
  google.maps.event.addListener(mobroc, 'click', function() {
    populateSidebar(mobrocInfo);
  });
  google.maps.event.addListener(morrison, 'click', function() {
    populateSidebar(morrisonInfo);
  });
  google.maps.event.addListener(newLondon, 'click', function() {
    populateSidebar(newLondonInfo);
  });
  google.maps.event.addListener(olin, 'click', function() {
    populateSidebar(olinInfo);
  });
  google.maps.event.addListener(palmer, 'click', function() {
    populateSidebar(palmerInfo);
  });
  google.maps.event.addListener(park, 'click', function() {
    populateSidebar(parkInfo);
  });
  google.maps.event.addListener(plant, 'click', function() {
    populateSidebar(plantInfo);
  });
  google.maps.event.addListener(powerHouse, 'click', function() {
    populateSidebar(powerHouseInfo);
  });
  google.maps.event.addListener(ridge, 'click', function() {
    populateSidebar(ridgeInfo);
  });
  google.maps.event.addListener(shain, 'click', function() {
    populateSidebar(shainInfo);
  });
  google.maps.event.addListener(smithBurdick, 'click', function() {
    populateSidebar(smithBurdickInfo);
  });
  google.maps.event.addListener(tansill, 'click', function() {
    populateSidebar(tansillInfo);
  });
  google.maps.event.addListener(unity, 'click', function() {
    populateSidebar(unityInfo);
  });
  google.maps.event.addListener(healthCenter, 'click', function() {
    populateSidebar(healthCenterInfo);
  });
  google.maps.event.addListener(windham, 'click', function() {
    populateSidebar(windhamInfo);
  });
  google.maps.event.addListener(winthrop, 'click', function() {
    populateSidebar(winthropInfo);
  });
  google.maps.event.addListener(winthropAnnex, 'click', function() {
    populateSidebar(winthropAnnexInfo);
  });
  google.maps.event.addListener(wright, 'click', function() {
    populateSidebar(wrightInfo);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);