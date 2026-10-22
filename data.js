var APP_DATA = {
  "scenes": [
    {
      "id": "0-123",
      "name": "123",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 380,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1497766271387704,
          "pitch": 0.07534067388594323,
          "rotation": 0,
          "target": "1-bloem_olive_house"
        },
        {
          "yaw": -0.8138467610612068,
          "pitch": 0.09129818805399381,
          "rotation": 0,
          "target": "2-brown_photostudio_02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bloem_olive_house",
      "name": "bloem_olive_house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 380,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.38102158129029995,
          "pitch": 0.09761184700380454,
          "rotation": 0,
          "target": "0-123"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-brown_photostudio_02",
      "name": "brown_photostudio_02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 380,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3208085533413634,
          "pitch": 0.021054929888254748,
          "rotation": 0.7853981633974483,
          "target": "0-123"
        },
        {
          "yaw": 0.7403649765122342,
          "pitch": 0.007722793517000781,
          "rotation": 0,
          "target": "3-illovo_beach_balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-illovo_beach_balcony",
      "name": "illovo_beach_balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 380,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6347119769378633,
          "pitch": 0.2488577007076067,
          "rotation": 0,
          "target": "2-brown_photostudio_02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
