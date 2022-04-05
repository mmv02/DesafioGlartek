const express= require('express');

const app = express();

app.use(express.json());

const path = require ('path');

const router = express.Router();

router.get('/cities',function(req,res) {
    return res.json([
        {
            nome: "Lisboa",
            codigo: 2267056,
            data:{
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1649181600,
                        "main": {
                            "temp": 283.82,
                            "feels_like": 282.98,
                            "temp_min": 281.4,
                            "temp_max": 283.82,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 988,
                            "humidity": 78,
                            "temp_kf": 2.42
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.68,
                            "deg": 51,
                            "gust": 7.16
                        },
                        "visibility": 10000,
                        "pop": 0.16,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-05 18:00:00"
                    },
                    {
                        "dt": 1649192400,
                        "main": {
                            "temp": 282.32,
                            "feels_like": 281.52,
                            "temp_min": 279.32,
                            "temp_max": 282.32,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 990,
                            "humidity": 81,
                            "temp_kf": 3
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.84,
                            "deg": 354,
                            "gust": 1.84
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-05 21:00:00"
                    },
                    {
                        "dt": 1649203200,
                        "main": {
                            "temp": 280.29,
                            "feels_like": 280.29,
                            "temp_min": 278.53,
                            "temp_max": 280.29,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 990,
                            "humidity": 80,
                            "temp_kf": 1.76
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 1.29,
                            "deg": 340,
                            "gust": 1.41
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 00:00:00"
                    },
                    {
                        "dt": 1649214000,
                        "main": {
                            "temp": 278.61,
                            "feels_like": 278.61,
                            "temp_min": 278.61,
                            "temp_max": 278.61,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 989,
                            "humidity": 74,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 1.06,
                            "deg": 318,
                            "gust": 1.15
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 03:00:00"
                    },
                    {
                        "dt": 1649224800,
                        "main": {
                            "temp": 278.68,
                            "feels_like": 277.25,
                            "temp_min": 278.68,
                            "temp_max": 278.68,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 990,
                            "humidity": 85,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 81
                        },
                        "wind": {
                            "speed": 1.89,
                            "deg": 306,
                            "gust": 1.92
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 06:00:00"
                    },
                    {
                        "dt": 1649235600,
                        "main": {
                            "temp": 285.95,
                            "feels_like": 285.19,
                            "temp_min": 285.95,
                            "temp_max": 285.95,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 992,
                            "humidity": 73,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 36
                        },
                        "wind": {
                            "speed": 3.41,
                            "deg": 339,
                            "gust": 4.89
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 09:00:00"
                    },
                    {
                        "dt": 1649246400,
                        "main": {
                            "temp": 289.01,
                            "feels_like": 288.17,
                            "temp_min": 289.01,
                            "temp_max": 289.01,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 994,
                            "humidity": 58,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 20
                        },
                        "wind": {
                            "speed": 6.6,
                            "deg": 324,
                            "gust": 6.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 12:00:00"
                    },
                    {
                        "dt": 1649257200,
                        "main": {
                            "temp": 288.91,
                            "feels_like": 288.13,
                            "temp_min": 288.91,
                            "temp_max": 288.91,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 993,
                            "humidity": 61,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 37
                        },
                        "wind": {
                            "speed": 6.74,
                            "deg": 327,
                            "gust": 7.4
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 15:00:00"
                    },
                    {
                        "dt": 1649268000,
                        "main": {
                            "temp": 285.92,
                            "feels_like": 285.29,
                            "temp_min": 285.92,
                            "temp_max": 285.92,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 995,
                            "humidity": 78,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 42
                        },
                        "wind": {
                            "speed": 6.22,
                            "deg": 329,
                            "gust": 8.42
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 18:00:00"
                    },
                    {
                        "dt": 1649278800,
                        "main": {
                            "temp": 281.68,
                            "feels_like": 279.92,
                            "temp_min": 281.68,
                            "temp_max": 281.68,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 46
                        },
                        "wind": {
                            "speed": 2.96,
                            "deg": 320,
                            "gust": 6.88
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 21:00:00"
                    },
                    {
                        "dt": 1649289600,
                        "main": {
                            "temp": 281,
                            "feels_like": 279.42,
                            "temp_min": 281,
                            "temp_max": 281,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 36
                        },
                        "wind": {
                            "speed": 2.51,
                            "deg": 313,
                            "gust": 2.69
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 00:00:00"
                    },
                    {
                        "dt": 1649300400,
                        "main": {
                            "temp": 280.93,
                            "feels_like": 279.55,
                            "temp_min": 280.93,
                            "temp_max": 280.93,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 32
                        },
                        "wind": {
                            "speed": 2.24,
                            "deg": 304,
                            "gust": 2.22
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 03:00:00"
                    },
                    {
                        "dt": 1649311200,
                        "main": {
                            "temp": 280.63,
                            "feels_like": 279.39,
                            "temp_min": 280.63,
                            "temp_max": 280.63,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 36
                        },
                        "wind": {
                            "speed": 2.02,
                            "deg": 301,
                            "gust": 2.01
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 06:00:00"
                    },
                    {
                        "dt": 1649322000,
                        "main": {
                            "temp": 286.2,
                            "feels_like": 285.41,
                            "temp_min": 286.2,
                            "temp_max": 286.2,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 998,
                            "humidity": 71,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 24
                        },
                        "wind": {
                            "speed": 3.29,
                            "deg": 294,
                            "gust": 4.32
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 09:00:00"
                    },
                    {
                        "dt": 1649332800,
                        "main": {
                            "temp": 289.08,
                            "feels_like": 288.22,
                            "temp_min": 289.08,
                            "temp_max": 289.08,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 998,
                            "humidity": 57,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 48
                        },
                        "wind": {
                            "speed": 4.68,
                            "deg": 274,
                            "gust": 4.77
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 12:00:00"
                    },
                    {
                        "dt": 1649343600,
                        "main": {
                            "temp": 289.02,
                            "feels_like": 288.2,
                            "temp_min": 289.02,
                            "temp_max": 289.02,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 997,
                            "humidity": 59,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 9
                        },
                        "wind": {
                            "speed": 5.48,
                            "deg": 272,
                            "gust": 5.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 15:00:00"
                    },
                    {
                        "dt": 1649354400,
                        "main": {
                            "temp": 286.41,
                            "feels_like": 285.75,
                            "temp_min": 286.41,
                            "temp_max": 286.41,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 75,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 9
                        },
                        "wind": {
                            "speed": 4.84,
                            "deg": 274,
                            "gust": 6.51
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 18:00:00"
                    },
                    {
                        "dt": 1649365200,
                        "main": {
                            "temp": 282.76,
                            "feels_like": 281.21,
                            "temp_min": 282.76,
                            "temp_max": 282.76,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 998,
                            "humidity": 92,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 22
                        },
                        "wind": {
                            "speed": 2.97,
                            "deg": 269,
                            "gust": 4.77
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 21:00:00"
                    },
                    {
                        "dt": 1649376000,
                        "main": {
                            "temp": 284.06,
                            "feels_like": 283.35,
                            "temp_min": 284.06,
                            "temp_max": 284.06,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 997,
                            "humidity": 82,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 45
                        },
                        "wind": {
                            "speed": 3.48,
                            "deg": 254,
                            "gust": 4.62
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 00:00:00"
                    },
                    {
                        "dt": 1649386800,
                        "main": {
                            "temp": 283.86,
                            "feels_like": 283.31,
                            "temp_min": 283.86,
                            "temp_max": 283.86,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 996,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 96
                        },
                        "wind": {
                            "speed": 3.06,
                            "deg": 238,
                            "gust": 4.98
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 03:00:00"
                    },
                    {
                        "dt": 1649397600,
                        "main": {
                            "temp": 282.86,
                            "feels_like": 281.42,
                            "temp_min": 282.86,
                            "temp_max": 282.86,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 995,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 2.83,
                            "deg": 227,
                            "gust": 4.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 06:00:00"
                    },
                    {
                        "dt": 1649408400,
                        "main": {
                            "temp": 287.91,
                            "feels_like": 287.32,
                            "temp_min": 287.91,
                            "temp_max": 287.91,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 996,
                            "humidity": 72,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 74
                        },
                        "wind": {
                            "speed": 5.69,
                            "deg": 236,
                            "gust": 7.43
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 09:00:00"
                    },
                    {
                        "dt": 1649419200,
                        "main": {
                            "temp": 289.83,
                            "feels_like": 289.2,
                            "temp_min": 289.83,
                            "temp_max": 289.83,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 995,
                            "humidity": 63,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 82
                        },
                        "wind": {
                            "speed": 6.88,
                            "deg": 241,
                            "gust": 8.01
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 12:00:00"
                    },
                    {
                        "dt": 1649430000,
                        "main": {
                            "temp": 289.29,
                            "feels_like": 288.71,
                            "temp_min": 289.29,
                            "temp_max": 289.29,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 994,
                            "humidity": 67,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 7.04,
                            "deg": 246,
                            "gust": 8.67
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 15:00:00"
                    },
                    {
                        "dt": 1649440800,
                        "main": {
                            "temp": 287.22,
                            "feels_like": 286.8,
                            "temp_min": 287.22,
                            "temp_max": 287.22,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 994,
                            "humidity": 81,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5.1,
                            "deg": 248,
                            "gust": 8.39
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 18:00:00"
                    },
                    {
                        "dt": 1649451600,
                        "main": {
                            "temp": 285.76,
                            "feels_like": 285.5,
                            "temp_min": 285.76,
                            "temp_max": 285.76,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 995,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.49,
                            "deg": 245,
                            "gust": 7.52
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 21:00:00"
                    },
                    {
                        "dt": 1649462400,
                        "main": {
                            "temp": 284.25,
                            "feels_like": 283.95,
                            "temp_min": 284.25,
                            "temp_max": 284.25,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 994,
                            "humidity": 97,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 2.41,
                            "deg": 225,
                            "gust": 3.97
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 00:00:00"
                    },
                    {
                        "dt": 1649473200,
                        "main": {
                            "temp": 283.83,
                            "feels_like": 283.51,
                            "temp_min": 283.83,
                            "temp_max": 283.83,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 993,
                            "humidity": 98,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 52
                        },
                        "wind": {
                            "speed": 1.95,
                            "deg": 222,
                            "gust": 2.74
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 03:00:00"
                    },
                    {
                        "dt": 1649484000,
                        "main": {
                            "temp": 284.03,
                            "feels_like": 283.71,
                            "temp_min": 284.03,
                            "temp_max": 284.03,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 992,
                            "humidity": 97,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 59
                        },
                        "wind": {
                            "speed": 2.07,
                            "deg": 181,
                            "gust": 2.75
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 06:00:00"
                    },
                    {
                        "dt": 1649494800,
                        "main": {
                            "temp": 287.78,
                            "feels_like": 287.44,
                            "temp_min": 287.78,
                            "temp_max": 287.78,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 993,
                            "humidity": 82,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.38,
                            "deg": 174,
                            "gust": 4.66
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 09:00:00"
                    },
                    {
                        "dt": 1649505600,
                        "main": {
                            "temp": 291.19,
                            "feels_like": 290.62,
                            "temp_min": 291.19,
                            "temp_max": 291.19,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 991,
                            "humidity": 60,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 4.56,
                            "deg": 175,
                            "gust": 5.36
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 12:00:00"
                    },
                    {
                        "dt": 1649516400,
                        "main": {
                            "temp": 291.72,
                            "feels_like": 290.89,
                            "temp_min": 291.72,
                            "temp_max": 291.72,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 989,
                            "humidity": 48,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5,
                            "deg": 192,
                            "gust": 6.43
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 15:00:00"
                    },
                    {
                        "dt": 1649527200,
                        "main": {
                            "temp": 288.28,
                            "feels_like": 287.52,
                            "temp_min": 288.28,
                            "temp_max": 288.28,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 988,
                            "humidity": 64,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.92,
                            "deg": 214,
                            "gust": 6.94
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 18:00:00"
                    },
                    {
                        "dt": 1649538000,
                        "main": {
                            "temp": 283.26,
                            "feels_like": 282.57,
                            "temp_min": 283.26,
                            "temp_max": 283.26,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 987,
                            "humidity": 86,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 36
                        },
                        "wind": {
                            "speed": 2.51,
                            "deg": 163,
                            "gust": 2.51
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 21:00:00"
                    },
                    {
                        "dt": 1649548800,
                        "main": {
                            "temp": 282.79,
                            "feels_like": 281.43,
                            "temp_min": 282.79,
                            "temp_max": 282.79,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 986,
                            "humidity": 90,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 39
                        },
                        "wind": {
                            "speed": 2.68,
                            "deg": 169,
                            "gust": 3.1
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 00:00:00"
                    },
                    {
                        "dt": 1649559600,
                        "main": {
                            "temp": 282.09,
                            "feels_like": 280.6,
                            "temp_min": 282.09,
                            "temp_max": 282.09,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 984,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 2.67,
                            "deg": 147,
                            "gust": 2.89
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 03:00:00"
                    },
                    {
                        "dt": 1649570400,
                        "main": {
                            "temp": 281.7,
                            "feels_like": 280.05,
                            "temp_min": 281.7,
                            "temp_max": 281.7,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 983,
                            "humidity": 96,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 23
                        },
                        "wind": {
                            "speed": 2.79,
                            "deg": 138,
                            "gust": 3.57
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 06:00:00"
                    },
                    {
                        "dt": 1649581200,
                        "main": {
                            "temp": 287.71,
                            "feels_like": 287.08,
                            "temp_min": 287.71,
                            "temp_max": 287.71,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 984,
                            "humidity": 71,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5.15,
                            "deg": 173,
                            "gust": 9.62
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 09:00:00"
                    },
                    {
                        "dt": 1649592000,
                        "main": {
                            "temp": 291.36,
                            "feels_like": 290.54,
                            "temp_min": 291.36,
                            "temp_max": 291.36,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 983,
                            "humidity": 50,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 6.84,
                            "deg": 183,
                            "gust": 9.25
                        },
                        "visibility": 10000,
                        "pop": 0.1,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 12:00:00"
                    },
                    {
                        "dt": 1649602800,
                        "main": {
                            "temp": 291.75,
                            "feels_like": 290.92,
                            "temp_min": 291.75,
                            "temp_max": 291.75,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 981,
                            "humidity": 48,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 7.65,
                            "deg": 194,
                            "gust": 10.08
                        },
                        "visibility": 10000,
                        "pop": 0.1,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 15:00:00"
                    }
                ],
                "city": {
                    "id": 2267056,
                    "name": "Lisbon District",
                    "coord": {
                        "lat": 39,
                        "lon": -9.1333
                    },
                    "country": "PT",
                    "population": 0,
                    "timezone": 3600,
                    "sunrise": 1649139301,
                    "sunset": 1649185387
                }
            }
        },
        {
            nome: "Leiria",
            codigo: 2267094,
            data:{
                    "cod": "200",
                    "message": 0,
                    "cnt": 40,
                    "list": [
                        {
                            "dt": 1649181600,
                            "main": {
                                "temp": 287.89,
                                "feels_like": 286.86,
                                "temp_min": 284.44,
                                "temp_max": 287.89,
                                "pressure": 1014,
                                "sea_level": 1014,
                                "grnd_level": 1000,
                                "humidity": 55,
                                "temp_kf": 3.45
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 2.53,
                                "deg": 292,
                                "gust": 3.33
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-05 18:00:00"
                        },
                        {
                            "dt": 1649192400,
                            "main": {
                                "temp": 285.62,
                                "feels_like": 284.46,
                                "temp_min": 281.09,
                                "temp_max": 285.62,
                                "pressure": 1015,
                                "sea_level": 1015,
                                "grnd_level": 1002,
                                "humidity": 59,
                                "temp_kf": 4.53
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 0.49,
                                "deg": 266,
                                "gust": 1.07
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-05 21:00:00"
                        },
                        {
                            "dt": 1649203200,
                            "main": {
                                "temp": 283.26,
                                "feels_like": 282,
                                "temp_min": 280.95,
                                "temp_max": 283.26,
                                "pressure": 1015,
                                "sea_level": 1015,
                                "grnd_level": 1002,
                                "humidity": 64,
                                "temp_kf": 2.31
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 99
                            },
                            "wind": {
                                "speed": 0.78,
                                "deg": 241,
                                "gust": 1.53
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-06 00:00:00"
                        },
                        {
                            "dt": 1649214000,
                            "main": {
                                "temp": 280.66,
                                "feels_like": 280.66,
                                "temp_min": 280.66,
                                "temp_max": 280.66,
                                "pressure": 1015,
                                "sea_level": 1015,
                                "grnd_level": 1001,
                                "humidity": 76,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 95
                            },
                            "wind": {
                                "speed": 1.17,
                                "deg": 254,
                                "gust": 1.67
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-06 03:00:00"
                        },
                        {
                            "dt": 1649224800,
                            "main": {
                                "temp": 281.06,
                                "feels_like": 281.06,
                                "temp_min": 281.06,
                                "temp_max": 281.06,
                                "pressure": 1016,
                                "sea_level": 1016,
                                "grnd_level": 1002,
                                "humidity": 89,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 74
                            },
                            "wind": {
                                "speed": 1.12,
                                "deg": 287,
                                "gust": 2.2
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-06 06:00:00"
                        },
                        {
                            "dt": 1649235600,
                            "main": {
                                "temp": 286.38,
                                "feels_like": 285.56,
                                "temp_min": 286.38,
                                "temp_max": 286.38,
                                "pressure": 1018,
                                "sea_level": 1018,
                                "grnd_level": 1004,
                                "humidity": 69,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 76
                            },
                            "wind": {
                                "speed": 1.99,
                                "deg": 316,
                                "gust": 2.88
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-06 09:00:00"
                        },
                        {
                            "dt": 1649246400,
                            "main": {
                                "temp": 288.47,
                                "feels_like": 287.62,
                                "temp_min": 288.47,
                                "temp_max": 288.47,
                                "pressure": 1019,
                                "sea_level": 1019,
                                "grnd_level": 1005,
                                "humidity": 60,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 802,
                                    "main": "Clouds",
                                    "description": "scattered clouds",
                                    "icon": "03d"
                                }
                            ],
                            "clouds": {
                                "all": 40
                            },
                            "wind": {
                                "speed": 5.69,
                                "deg": 319,
                                "gust": 7.39
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-06 12:00:00"
                        },
                        {
                            "dt": 1649257200,
                            "main": {
                                "temp": 288.35,
                                "feels_like": 287.6,
                                "temp_min": 288.35,
                                "temp_max": 288.35,
                                "pressure": 1019,
                                "sea_level": 1019,
                                "grnd_level": 1005,
                                "humidity": 64,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 801,
                                    "main": "Clouds",
                                    "description": "few clouds",
                                    "icon": "02d"
                                }
                            ],
                            "clouds": {
                                "all": 14
                            },
                            "wind": {
                                "speed": 6.24,
                                "deg": 322,
                                "gust": 8.19
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-06 15:00:00"
                        },
                        {
                            "dt": 1649268000,
                            "main": {
                                "temp": 286.03,
                                "feels_like": 285.51,
                                "temp_min": 286.03,
                                "temp_max": 286.03,
                                "pressure": 1020,
                                "sea_level": 1020,
                                "grnd_level": 1006,
                                "humidity": 82,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 802,
                                    "main": "Clouds",
                                    "description": "scattered clouds",
                                    "icon": "03d"
                                }
                            ],
                            "clouds": {
                                "all": 27
                            },
                            "wind": {
                                "speed": 5.28,
                                "deg": 327,
                                "gust": 8.33
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-06 18:00:00"
                        },
                        {
                            "dt": 1649278800,
                            "main": {
                                "temp": 283.14,
                                "feels_like": 281.55,
                                "temp_min": 283.14,
                                "temp_max": 283.14,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 93,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 68
                            },
                            "wind": {
                                "speed": 3.17,
                                "deg": 331,
                                "gust": 7.73
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-06 21:00:00"
                        },
                        {
                            "dt": 1649289600,
                            "main": {
                                "temp": 282.04,
                                "feels_like": 280.97,
                                "temp_min": 282.04,
                                "temp_max": 282.04,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 94,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 57
                            },
                            "wind": {
                                "speed": 2.09,
                                "deg": 322,
                                "gust": 3.15
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-07 00:00:00"
                        },
                        {
                            "dt": 1649300400,
                            "main": {
                                "temp": 282.21,
                                "feels_like": 281.43,
                                "temp_min": 282.21,
                                "temp_max": 282.21,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 93,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 54
                            },
                            "wind": {
                                "speed": 1.79,
                                "deg": 310,
                                "gust": 2.77
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-07 03:00:00"
                        },
                        {
                            "dt": 1649311200,
                            "main": {
                                "temp": 281.94,
                                "feels_like": 281.94,
                                "temp_min": 281.94,
                                "temp_max": 281.94,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 91,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 60
                            },
                            "wind": {
                                "speed": 1.28,
                                "deg": 293,
                                "gust": 1.76
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-07 06:00:00"
                        },
                        {
                            "dt": 1649322000,
                            "main": {
                                "temp": 286.45,
                                "feels_like": 285.74,
                                "temp_min": 286.45,
                                "temp_max": 286.45,
                                "pressure": 1024,
                                "sea_level": 1024,
                                "grnd_level": 1010,
                                "humidity": 73,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 802,
                                    "main": "Clouds",
                                    "description": "scattered clouds",
                                    "icon": "03d"
                                }
                            ],
                            "clouds": {
                                "all": 49
                            },
                            "wind": {
                                "speed": 2.24,
                                "deg": 287,
                                "gust": 3.34
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-07 09:00:00"
                        },
                        {
                            "dt": 1649332800,
                            "main": {
                                "temp": 289.42,
                                "feels_like": 288.62,
                                "temp_min": 289.42,
                                "temp_max": 289.42,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1010,
                                "humidity": 58,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 802,
                                    "main": "Clouds",
                                    "description": "scattered clouds",
                                    "icon": "03d"
                                }
                            ],
                            "clouds": {
                                "all": 49
                            },
                            "wind": {
                                "speed": 4.09,
                                "deg": 268,
                                "gust": 4.39
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-07 12:00:00"
                        },
                        {
                            "dt": 1649343600,
                            "main": {
                                "temp": 289.34,
                                "feels_like": 288.56,
                                "temp_min": 289.34,
                                "temp_max": 289.34,
                                "pressure": 1022,
                                "sea_level": 1022,
                                "grnd_level": 1009,
                                "humidity": 59,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 801,
                                    "main": "Clouds",
                                    "description": "few clouds",
                                    "icon": "02d"
                                }
                            ],
                            "clouds": {
                                "all": 11
                            },
                            "wind": {
                                "speed": 4.88,
                                "deg": 271,
                                "gust": 5.57
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-07 15:00:00"
                        },
                        {
                            "dt": 1649354400,
                            "main": {
                                "temp": 286.86,
                                "feels_like": 286.24,
                                "temp_min": 286.86,
                                "temp_max": 286.86,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 75,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 800,
                                    "main": "Clear",
                                    "description": "clear sky",
                                    "icon": "01d"
                                }
                            ],
                            "clouds": {
                                "all": 9
                            },
                            "wind": {
                                "speed": 3.9,
                                "deg": 262,
                                "gust": 6.01
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-07 18:00:00"
                        },
                        {
                            "dt": 1649365200,
                            "main": {
                                "temp": 283.18,
                                "feels_like": 282.69,
                                "temp_min": 283.18,
                                "temp_max": 283.18,
                                "pressure": 1024,
                                "sea_level": 1024,
                                "grnd_level": 1010,
                                "humidity": 94,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 801,
                                    "main": "Clouds",
                                    "description": "few clouds",
                                    "icon": "02n"
                                }
                            ],
                            "clouds": {
                                "all": 15
                            },
                            "wind": {
                                "speed": 2.07,
                                "deg": 236,
                                "gust": 2.78
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-07 21:00:00"
                        },
                        {
                            "dt": 1649376000,
                            "main": {
                                "temp": 282.79,
                                "feels_like": 281.68,
                                "temp_min": 282.79,
                                "temp_max": 282.79,
                                "pressure": 1023,
                                "sea_level": 1023,
                                "grnd_level": 1009,
                                "humidity": 95,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 802,
                                    "main": "Clouds",
                                    "description": "scattered clouds",
                                    "icon": "03n"
                                }
                            ],
                            "clouds": {
                                "all": 38
                            },
                            "wind": {
                                "speed": 2.31,
                                "deg": 200,
                                "gust": 3.37
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-08 00:00:00"
                        },
                        {
                            "dt": 1649386800,
                            "main": {
                                "temp": 282.89,
                                "feels_like": 281.61,
                                "temp_min": 282.89,
                                "temp_max": 282.89,
                                "pressure": 1021,
                                "sea_level": 1021,
                                "grnd_level": 1007,
                                "humidity": 96,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 2.58,
                                "deg": 197,
                                "gust": 5.98
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-08 03:00:00"
                        },
                        {
                            "dt": 1649397600,
                            "main": {
                                "temp": 282.65,
                                "feels_like": 281.3,
                                "temp_min": 282.65,
                                "temp_max": 282.65,
                                "pressure": 1020,
                                "sea_level": 1020,
                                "grnd_level": 1007,
                                "humidity": 97,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 98
                            },
                            "wind": {
                                "speed": 2.62,
                                "deg": 184,
                                "gust": 5.83
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-08 06:00:00"
                        },
                        {
                            "dt": 1649408400,
                            "main": {
                                "temp": 287.49,
                                "feels_like": 287.04,
                                "temp_min": 287.49,
                                "temp_max": 287.49,
                                "pressure": 1021,
                                "sea_level": 1021,
                                "grnd_level": 1007,
                                "humidity": 79,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 93
                            },
                            "wind": {
                                "speed": 4.9,
                                "deg": 222,
                                "gust": 7.37
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-08 09:00:00"
                        },
                        {
                            "dt": 1649419200,
                            "main": {
                                "temp": 290.17,
                                "feels_like": 289.55,
                                "temp_min": 290.17,
                                "temp_max": 290.17,
                                "pressure": 1020,
                                "sea_level": 1020,
                                "grnd_level": 1007,
                                "humidity": 62,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 95
                            },
                            "wind": {
                                "speed": 6.12,
                                "deg": 238,
                                "gust": 8.06
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-08 12:00:00"
                        },
                        {
                            "dt": 1649430000,
                            "main": {
                                "temp": 289.7,
                                "feels_like": 289.16,
                                "temp_min": 289.7,
                                "temp_max": 289.7,
                                "pressure": 1019,
                                "sea_level": 1019,
                                "grnd_level": 1006,
                                "humidity": 67,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 6.61,
                                "deg": 244,
                                "gust": 9.11
                            },
                            "visibility": 10000,
                            "pop": 0.1,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-08 15:00:00"
                        },
                        {
                            "dt": 1649440800,
                            "main": {
                                "temp": 287.2,
                                "feels_like": 286.91,
                                "temp_min": 287.2,
                                "temp_max": 287.2,
                                "pressure": 1019,
                                "sea_level": 1019,
                                "grnd_level": 1006,
                                "humidity": 86,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 4.91,
                                "deg": 235,
                                "gust": 9.5
                            },
                            "visibility": 10000,
                            "pop": 0.32,
                            "rain": {
                                "3h": 0.19
                            },
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-08 18:00:00"
                        },
                        {
                            "dt": 1649451600,
                            "main": {
                                "temp": 286.55,
                                "feels_like": 286.4,
                                "temp_min": 286.55,
                                "temp_max": 286.55,
                                "pressure": 1020,
                                "sea_level": 1020,
                                "grnd_level": 1007,
                                "humidity": 94,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 4.01,
                                "deg": 229,
                                "gust": 8.6
                            },
                            "visibility": 10000,
                            "pop": 0.24,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-08 21:00:00"
                        },
                        {
                            "dt": 1649462400,
                            "main": {
                                "temp": 286.46,
                                "feels_like": 286.33,
                                "temp_min": 286.46,
                                "temp_max": 286.46,
                                "pressure": 1019,
                                "sea_level": 1019,
                                "grnd_level": 1006,
                                "humidity": 95,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 3.31,
                                "deg": 215,
                                "gust": 7.69
                            },
                            "visibility": 10000,
                            "pop": 0.2,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-09 00:00:00"
                        },
                        {
                            "dt": 1649473200,
                            "main": {
                                "temp": 286.38,
                                "feels_like": 286.27,
                                "temp_min": 286.38,
                                "temp_max": 286.38,
                                "pressure": 1018,
                                "sea_level": 1018,
                                "grnd_level": 1005,
                                "humidity": 96,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 500,
                                    "main": "Rain",
                                    "description": "light rain",
                                    "icon": "10n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 2.83,
                                "deg": 215,
                                "gust": 6.81
                            },
                            "visibility": 10000,
                            "pop": 0.29,
                            "rain": {
                                "3h": 0.1
                            },
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-09 03:00:00"
                        },
                        {
                            "dt": 1649484000,
                            "main": {
                                "temp": 286.22,
                                "feels_like": 286.09,
                                "temp_min": 286.22,
                                "temp_max": 286.22,
                                "pressure": 1017,
                                "sea_level": 1017,
                                "grnd_level": 1004,
                                "humidity": 96,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 2.46,
                                "deg": 183,
                                "gust": 5.33
                            },
                            "visibility": 10000,
                            "pop": 0.14,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-09 06:00:00"
                        },
                        {
                            "dt": 1649494800,
                            "main": {
                                "temp": 287.52,
                                "feels_like": 287.31,
                                "temp_min": 287.52,
                                "temp_max": 287.52,
                                "pressure": 1018,
                                "sea_level": 1018,
                                "grnd_level": 1004,
                                "humidity": 88,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 2.85,
                                "deg": 167,
                                "gust": 4.76
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-09 09:00:00"
                        },
                        {
                            "dt": 1649505600,
                            "main": {
                                "temp": 290.09,
                                "feels_like": 289.75,
                                "temp_min": 290.09,
                                "temp_max": 290.09,
                                "pressure": 1017,
                                "sea_level": 1017,
                                "grnd_level": 1003,
                                "humidity": 73,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 3.54,
                                "deg": 161,
                                "gust": 4.99
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-09 12:00:00"
                        },
                        {
                            "dt": 1649516400,
                            "main": {
                                "temp": 291.99,
                                "feels_like": 291.47,
                                "temp_min": 291.99,
                                "temp_max": 291.99,
                                "pressure": 1014,
                                "sea_level": 1014,
                                "grnd_level": 1001,
                                "humidity": 59,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 3.8,
                                "deg": 196,
                                "gust": 6.14
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-09 15:00:00"
                        },
                        {
                            "dt": 1649527200,
                            "main": {
                                "temp": 289.91,
                                "feels_like": 289.29,
                                "temp_min": 289.91,
                                "temp_max": 289.91,
                                "pressure": 1013,
                                "sea_level": 1013,
                                "grnd_level": 1000,
                                "humidity": 63,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 3.59,
                                "deg": 220,
                                "gust": 6.98
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-09 18:00:00"
                        },
                        {
                            "dt": 1649538000,
                            "main": {
                                "temp": 285.14,
                                "feels_like": 284.27,
                                "temp_min": 285.14,
                                "temp_max": 285.14,
                                "pressure": 1012,
                                "sea_level": 1012,
                                "grnd_level": 999,
                                "humidity": 72,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 83
                            },
                            "wind": {
                                "speed": 2.47,
                                "deg": 150,
                                "gust": 2.6
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-09 21:00:00"
                        },
                        {
                            "dt": 1649548800,
                            "main": {
                                "temp": 283.73,
                                "feels_like": 282.88,
                                "temp_min": 283.73,
                                "temp_max": 283.73,
                                "pressure": 1012,
                                "sea_level": 1012,
                                "grnd_level": 998,
                                "humidity": 78,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 803,
                                    "main": "Clouds",
                                    "description": "broken clouds",
                                    "icon": "04n"
                                }
                            ],
                            "clouds": {
                                "all": 71
                            },
                            "wind": {
                                "speed": 2.53,
                                "deg": 150,
                                "gust": 3.67
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-10 00:00:00"
                        },
                        {
                            "dt": 1649559600,
                            "main": {
                                "temp": 282.23,
                                "feels_like": 280.56,
                                "temp_min": 282.23,
                                "temp_max": 282.23,
                                "pressure": 1010,
                                "sea_level": 1010,
                                "grnd_level": 996,
                                "humidity": 91,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 800,
                                    "main": "Clear",
                                    "description": "clear sky",
                                    "icon": "01n"
                                }
                            ],
                            "clouds": {
                                "all": 1
                            },
                            "wind": {
                                "speed": 3,
                                "deg": 133,
                                "gust": 5.39
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-10 03:00:00"
                        },
                        {
                            "dt": 1649570400,
                            "main": {
                                "temp": 281.67,
                                "feels_like": 279.63,
                                "temp_min": 281.67,
                                "temp_max": 281.67,
                                "pressure": 1009,
                                "sea_level": 1009,
                                "grnd_level": 995,
                                "humidity": 94,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 801,
                                    "main": "Clouds",
                                    "description": "few clouds",
                                    "icon": "02n"
                                }
                            ],
                            "clouds": {
                                "all": 18
                            },
                            "wind": {
                                "speed": 3.44,
                                "deg": 133,
                                "gust": 7.41
                            },
                            "visibility": 10000,
                            "pop": 0,
                            "sys": {
                                "pod": "n"
                            },
                            "dt_txt": "2022-04-10 06:00:00"
                        },
                        {
                            "dt": 1649581200,
                            "main": {
                                "temp": 287.06,
                                "feels_like": 286.26,
                                "temp_min": 287.06,
                                "temp_max": 287.06,
                                "pressure": 1009,
                                "sea_level": 1009,
                                "grnd_level": 996,
                                "humidity": 67,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 5.24,
                                "deg": 150,
                                "gust": 10.96
                            },
                            "visibility": 10000,
                            "pop": 0.01,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-10 09:00:00"
                        },
                        {
                            "dt": 1649592000,
                            "main": {
                                "temp": 290.86,
                                "feels_like": 290.07,
                                "temp_min": 290.86,
                                "temp_max": 290.86,
                                "pressure": 1008,
                                "sea_level": 1008,
                                "grnd_level": 995,
                                "humidity": 53,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 5.65,
                                "deg": 175,
                                "gust": 8.91
                            },
                            "visibility": 10000,
                            "pop": 0.08,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-10 12:00:00"
                        },
                        {
                            "dt": 1649602800,
                            "main": {
                                "temp": 292.84,
                                "feels_like": 292.09,
                                "temp_min": 292.84,
                                "temp_max": 292.84,
                                "pressure": 1006,
                                "sea_level": 1006,
                                "grnd_level": 993,
                                "humidity": 47,
                                "temp_kf": 0
                            },
                            "weather": [
                                {
                                    "id": 804,
                                    "main": "Clouds",
                                    "description": "overcast clouds",
                                    "icon": "04d"
                                }
                            ],
                            "clouds": {
                                "all": 100
                            },
                            "wind": {
                                "speed": 6.17,
                                "deg": 195,
                                "gust": 10.05
                            },
                            "visibility": 10000,
                            "pop": 0.18,
                            "sys": {
                                "pod": "d"
                            },
                            "dt_txt": "2022-04-10 15:00:00"
                        }
                    ],
                    "city": {
                        "id": 2267094,
                        "name": "Leiria",
                        "coord": {
                            "lat": 39.6667,
                            "lon": -8.8333
                        },
                        "country": "PT",
                        "population": 0,
                        "timezone": 3600,
                        "sunrise": 1649139198,
                        "sunset": 1649185346
                    }
                }                                   
        },
        {
            nome:'Coimbra',
            codigo:2740636,
            data:{
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1649181600,
                        "main": {
                            "temp": 287.26,
                            "feels_like": 286.03,
                            "temp_min": 286.81,
                            "temp_max": 287.26,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 1008,
                            "humidity": 50,
                            "temp_kf": 0.45
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 2.86,
                            "deg": 273,
                            "gust": 5.07
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-05 18:00:00"
                    },
                    {
                        "dt": 1649192400,
                        "main": {
                            "temp": 285.22,
                            "feels_like": 283.97,
                            "temp_min": 281.14,
                            "temp_max": 285.22,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 1011,
                            "humidity": 57,
                            "temp_kf": 4.08
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 97
                        },
                        "wind": {
                            "speed": 1.75,
                            "deg": 199,
                            "gust": 2.33
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-05 21:00:00"
                    },
                    {
                        "dt": 1649203200,
                        "main": {
                            "temp": 282.87,
                            "feels_like": 282.87,
                            "temp_min": 280.68,
                            "temp_max": 282.87,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 1011,
                            "humidity": 68,
                            "temp_kf": 2.19
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 96
                        },
                        "wind": {
                            "speed": 1.17,
                            "deg": 166,
                            "gust": 1.13
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 00:00:00"
                    },
                    {
                        "dt": 1649214000,
                        "main": {
                            "temp": 279.87,
                            "feels_like": 279.87,
                            "temp_min": 279.87,
                            "temp_max": 279.87,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 1011,
                            "humidity": 84,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.16,
                            "deg": 144,
                            "gust": 1.1
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 03:00:00"
                    },
                    {
                        "dt": 1649224800,
                        "main": {
                            "temp": 279.04,
                            "feels_like": 279.04,
                            "temp_min": 279.04,
                            "temp_max": 279.04,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 1012,
                            "humidity": 90,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 60
                        },
                        "wind": {
                            "speed": 1.22,
                            "deg": 141,
                            "gust": 1.12
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 06:00:00"
                    },
                    {
                        "dt": 1649235600,
                        "main": {
                            "temp": 287.09,
                            "feels_like": 286.29,
                            "temp_min": 287.09,
                            "temp_max": 287.09,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1013,
                            "humidity": 67,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 51
                        },
                        "wind": {
                            "speed": 1.49,
                            "deg": 187,
                            "gust": 1.95
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 09:00:00"
                    },
                    {
                        "dt": 1649246400,
                        "main": {
                            "temp": 291.12,
                            "feels_like": 290.12,
                            "temp_min": 291.12,
                            "temp_max": 291.12,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1013,
                            "humidity": 44,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 26
                        },
                        "wind": {
                            "speed": 3.91,
                            "deg": 279,
                            "gust": 3.67
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 12:00:00"
                    },
                    {
                        "dt": 1649257200,
                        "main": {
                            "temp": 290.96,
                            "feels_like": 290,
                            "temp_min": 290.96,
                            "temp_max": 290.96,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1013,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 10
                        },
                        "wind": {
                            "speed": 5.84,
                            "deg": 311,
                            "gust": 6.11
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 15:00:00"
                    },
                    {
                        "dt": 1649268000,
                        "main": {
                            "temp": 287.11,
                            "feels_like": 286.49,
                            "temp_min": 287.11,
                            "temp_max": 287.11,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1015,
                            "humidity": 74,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 17
                        },
                        "wind": {
                            "speed": 4.52,
                            "deg": 316,
                            "gust": 7.02
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 18:00:00"
                    },
                    {
                        "dt": 1649278800,
                        "main": {
                            "temp": 282.26,
                            "feels_like": 282.26,
                            "temp_min": 282.26,
                            "temp_max": 282.26,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1018,
                            "humidity": 96,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 86
                        },
                        "wind": {
                            "speed": 0.93,
                            "deg": 312,
                            "gust": 2.1
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 21:00:00"
                    },
                    {
                        "dt": 1649289600,
                        "main": {
                            "temp": 282.26,
                            "feels_like": 282.26,
                            "temp_min": 282.26,
                            "temp_max": 282.26,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1018,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 84
                        },
                        "wind": {
                            "speed": 0.27,
                            "deg": 285,
                            "gust": 1.15
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 00:00:00"
                    },
                    {
                        "dt": 1649300400,
                        "main": {
                            "temp": 284.4,
                            "feels_like": 283.59,
                            "temp_min": 284.4,
                            "temp_max": 284.4,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1018,
                            "humidity": 77,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.54,
                            "deg": 308,
                            "gust": 1.98
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 03:00:00"
                    },
                    {
                        "dt": 1649311200,
                        "main": {
                            "temp": 284.27,
                            "feels_like": 283.42,
                            "temp_min": 284.27,
                            "temp_max": 284.27,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1018,
                            "humidity": 76,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 1.07,
                            "deg": 292,
                            "gust": 1.37
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 06:00:00"
                    },
                    {
                        "dt": 1649322000,
                        "main": {
                            "temp": 286.03,
                            "feels_like": 285.2,
                            "temp_min": 286.03,
                            "temp_max": 286.03,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1019,
                            "humidity": 70,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 0.66,
                            "deg": 202,
                            "gust": 1.68
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 09:00:00"
                    },
                    {
                        "dt": 1649332800,
                        "main": {
                            "temp": 289.97,
                            "feels_like": 289.14,
                            "temp_min": 289.97,
                            "temp_max": 289.97,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1018,
                            "humidity": 55,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 96
                        },
                        "wind": {
                            "speed": 2.34,
                            "deg": 266,
                            "gust": 3.38
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 12:00:00"
                    },
                    {
                        "dt": 1649343600,
                        "main": {
                            "temp": 291.63,
                            "feels_like": 290.81,
                            "temp_min": 291.63,
                            "temp_max": 291.63,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1017,
                            "humidity": 49,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 26
                        },
                        "wind": {
                            "speed": 4.66,
                            "deg": 269,
                            "gust": 5.09
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 15:00:00"
                    },
                    {
                        "dt": 1649354400,
                        "main": {
                            "temp": 287.98,
                            "feels_like": 287.24,
                            "temp_min": 287.98,
                            "temp_max": 287.98,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1018,
                            "humidity": 66,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 17
                        },
                        "wind": {
                            "speed": 3.61,
                            "deg": 260,
                            "gust": 5.08
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 18:00:00"
                    },
                    {
                        "dt": 1649365200,
                        "main": {
                            "temp": 282.77,
                            "feels_like": 282.37,
                            "temp_min": 282.77,
                            "temp_max": 282.77,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 1019,
                            "humidity": 96,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 61
                        },
                        "wind": {
                            "speed": 1.5,
                            "deg": 172,
                            "gust": 1.5
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 21:00:00"
                    },
                    {
                        "dt": 1649376000,
                        "main": {
                            "temp": 283.42,
                            "feels_like": 282.93,
                            "temp_min": 283.42,
                            "temp_max": 283.42,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1018,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 74
                        },
                        "wind": {
                            "speed": 1.75,
                            "deg": 173,
                            "gust": 3.64
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 00:00:00"
                    },
                    {
                        "dt": 1649386800,
                        "main": {
                            "temp": 283.16,
                            "feels_like": 282.7,
                            "temp_min": 283.16,
                            "temp_max": 283.16,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1016,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.94,
                            "deg": 171,
                            "gust": 5.45
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 03:00:00"
                    },
                    {
                        "dt": 1649397600,
                        "main": {
                            "temp": 282.63,
                            "feels_like": 281.59,
                            "temp_min": 282.63,
                            "temp_max": 282.63,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1016,
                            "humidity": 97,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 2.18,
                            "deg": 169,
                            "gust": 6.44
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 06:00:00"
                    },
                    {
                        "dt": 1649408400,
                        "main": {
                            "temp": 287.99,
                            "feels_like": 287.49,
                            "temp_min": 287.99,
                            "temp_max": 287.99,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1016,
                            "humidity": 75,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 88
                        },
                        "wind": {
                            "speed": 4.41,
                            "deg": 211,
                            "gust": 7.23
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 09:00:00"
                    },
                    {
                        "dt": 1649419200,
                        "main": {
                            "temp": 290.25,
                            "feels_like": 289.58,
                            "temp_min": 290.25,
                            "temp_max": 290.25,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1015,
                            "humidity": 60,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 92
                        },
                        "wind": {
                            "speed": 5.21,
                            "deg": 239,
                            "gust": 8.01
                        },
                        "visibility": 10000,
                        "pop": 0.12,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 12:00:00"
                    },
                    {
                        "dt": 1649430000,
                        "main": {
                            "temp": 288.96,
                            "feels_like": 288.5,
                            "temp_min": 288.96,
                            "temp_max": 288.96,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1014,
                            "humidity": 73,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5.08,
                            "deg": 238,
                            "gust": 8.76
                        },
                        "visibility": 10000,
                        "pop": 0.36,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 15:00:00"
                    },
                    {
                        "dt": 1649440800,
                        "main": {
                            "temp": 286.48,
                            "feels_like": 286.32,
                            "temp_min": 286.48,
                            "temp_max": 286.48,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1014,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.84,
                            "deg": 219,
                            "gust": 10.01
                        },
                        "visibility": 10000,
                        "pop": 0.57,
                        "rain": {
                            "3h": 1.28
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 18:00:00"
                    },
                    {
                        "dt": 1649451600,
                        "main": {
                            "temp": 286.75,
                            "feels_like": 286.7,
                            "temp_min": 286.75,
                            "temp_max": 286.75,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1015,
                            "humidity": 97,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.12,
                            "deg": 225,
                            "gust": 8.96
                        },
                        "visibility": 10000,
                        "pop": 0.76,
                        "rain": {
                            "3h": 1.84
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 21:00:00"
                    },
                    {
                        "dt": 1649462400,
                        "main": {
                            "temp": 286.79,
                            "feels_like": 286.77,
                            "temp_min": 286.79,
                            "temp_max": 286.79,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1014,
                            "humidity": 98,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.54,
                            "deg": 212,
                            "gust": 8.03
                        },
                        "visibility": 10000,
                        "pop": 0.72,
                        "rain": {
                            "3h": 0.33
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 00:00:00"
                    },
                    {
                        "dt": 1649473200,
                        "main": {
                            "temp": 286.73,
                            "feels_like": 286.7,
                            "temp_min": 286.73,
                            "temp_max": 286.73,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1013,
                            "humidity": 98,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.3,
                            "deg": 209,
                            "gust": 7.43
                        },
                        "visibility": 10000,
                        "pop": 0.67,
                        "rain": {
                            "3h": 0.69
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 03:00:00"
                    },
                    {
                        "dt": 1649484000,
                        "main": {
                            "temp": 286.66,
                            "feels_like": 286.63,
                            "temp_min": 286.66,
                            "temp_max": 286.66,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1012,
                            "humidity": 98,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.92,
                            "deg": 177,
                            "gust": 5.79
                        },
                        "visibility": 10000,
                        "pop": 0.59,
                        "rain": {
                            "3h": 0.32
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 06:00:00"
                    },
                    {
                        "dt": 1649494800,
                        "main": {
                            "temp": 287.6,
                            "feels_like": 287.56,
                            "temp_min": 287.6,
                            "temp_max": 287.6,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1013,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.97,
                            "deg": 169,
                            "gust": 4.39
                        },
                        "visibility": 10000,
                        "pop": 0.26,
                        "rain": {
                            "3h": 0.17
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 09:00:00"
                    },
                    {
                        "dt": 1649505600,
                        "main": {
                            "temp": 289.67,
                            "feels_like": 289.49,
                            "temp_min": 289.67,
                            "temp_max": 289.67,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1013,
                            "humidity": 81,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.88,
                            "deg": 171,
                            "gust": 4.73
                        },
                        "visibility": 10000,
                        "pop": 0.27,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 12:00:00"
                    },
                    {
                        "dt": 1649516400,
                        "main": {
                            "temp": 293.99,
                            "feels_like": 293.57,
                            "temp_min": 293.99,
                            "temp_max": 293.99,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 1009,
                            "humidity": 55,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.92,
                            "deg": 185,
                            "gust": 6.09
                        },
                        "visibility": 10000,
                        "pop": 0.11,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 15:00:00"
                    },
                    {
                        "dt": 1649527200,
                        "main": {
                            "temp": 290.94,
                            "feels_like": 290.58,
                            "temp_min": 290.94,
                            "temp_max": 290.94,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 1009,
                            "humidity": 69,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.2,
                            "deg": 256,
                            "gust": 4.3
                        },
                        "visibility": 10000,
                        "pop": 0.06,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 18:00:00"
                    },
                    {
                        "dt": 1649538000,
                        "main": {
                            "temp": 285.1,
                            "feels_like": 284.73,
                            "temp_min": 285.1,
                            "temp_max": 285.1,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 1008,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 1.24,
                            "deg": 123,
                            "gust": 1.18
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 21:00:00"
                    },
                    {
                        "dt": 1649548800,
                        "main": {
                            "temp": 284.87,
                            "feels_like": 284.29,
                            "temp_min": 284.87,
                            "temp_max": 284.87,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 1007,
                            "humidity": 84,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 82
                        },
                        "wind": {
                            "speed": 1.77,
                            "deg": 167,
                            "gust": 1.93
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 00:00:00"
                    },
                    {
                        "dt": 1649559600,
                        "main": {
                            "temp": 283.74,
                            "feels_like": 283.15,
                            "temp_min": 283.74,
                            "temp_max": 283.74,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 1005,
                            "humidity": 88,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 2.34,
                            "deg": 138,
                            "gust": 3.64
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 03:00:00"
                    },
                    {
                        "dt": 1649570400,
                        "main": {
                            "temp": 283.1,
                            "feels_like": 281.92,
                            "temp_min": 283.1,
                            "temp_max": 283.1,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 1004,
                            "humidity": 87,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 17
                        },
                        "wind": {
                            "speed": 2.49,
                            "deg": 145,
                            "gust": 4.79
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 06:00:00"
                    },
                    {
                        "dt": 1649581200,
                        "main": {
                            "temp": 290.34,
                            "feels_like": 289.39,
                            "temp_min": 290.34,
                            "temp_max": 290.34,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1004,
                            "humidity": 49,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 4.66,
                            "deg": 162,
                            "gust": 10.28
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 09:00:00"
                    },
                    {
                        "dt": 1649592000,
                        "main": {
                            "temp": 293.02,
                            "feels_like": 291.98,
                            "temp_min": 293.02,
                            "temp_max": 293.02,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 1003,
                            "humidity": 35,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 5.18,
                            "deg": 184,
                            "gust": 9.27
                        },
                        "visibility": 10000,
                        "pop": 0.05,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 12:00:00"
                    },
                    {
                        "dt": 1649602800,
                        "main": {
                            "temp": 295.63,
                            "feels_like": 294.77,
                            "temp_min": 295.63,
                            "temp_max": 295.63,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 1001,
                            "humidity": 32,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5.94,
                            "deg": 195,
                            "gust": 9.78
                        },
                        "visibility": 10000,
                        "pop": 0.11,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 15:00:00"
                    }
                ],
                "city": {
                    "id": 2740636,
                    "name": "Coimbra",
                    "coord": {
                        "lat": 40.2,
                        "lon": -8.4167
                    },
                    "country": "PT",
                    "population": 0,
                    "timezone": 3600,
                    "sunrise": 1649139073,
                    "sunset": 1649185272
                }
            }
        },
        {
            nome:'Porto',
            codigo:2735941,
            data:{
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1649181600,
                        "main": {
                            "temp": 286.41,
                            "feels_like": 284.99,
                            "temp_min": 285.85,
                            "temp_max": 286.41,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 971,
                            "humidity": 46,
                            "temp_kf": 0.56
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 2.2,
                            "deg": 297,
                            "gust": 3.52
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-05 18:00:00"
                    },
                    {
                        "dt": 1649192400,
                        "main": {
                            "temp": 284.6,
                            "feels_like": 283.16,
                            "temp_min": 280.99,
                            "temp_max": 284.6,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 973,
                            "humidity": 52,
                            "temp_kf": 3.61
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 97
                        },
                        "wind": {
                            "speed": 0.81,
                            "deg": 147,
                            "gust": 0.77
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-05 21:00:00"
                    },
                    {
                        "dt": 1649203200,
                        "main": {
                            "temp": 281.47,
                            "feels_like": 281.47,
                            "temp_min": 279,
                            "temp_max": 281.47,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 973,
                            "humidity": 60,
                            "temp_kf": 2.47
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 84
                        },
                        "wind": {
                            "speed": 1.17,
                            "deg": 111,
                            "gust": 1.09
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 00:00:00"
                    },
                    {
                        "dt": 1649214000,
                        "main": {
                            "temp": 277.78,
                            "feels_like": 277.78,
                            "temp_min": 277.78,
                            "temp_max": 277.78,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 973,
                            "humidity": 67,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 6
                        },
                        "wind": {
                            "speed": 1.15,
                            "deg": 111,
                            "gust": 1.04
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 03:00:00"
                    },
                    {
                        "dt": 1649224800,
                        "main": {
                            "temp": 276.92,
                            "feels_like": 276.92,
                            "temp_min": 276.92,
                            "temp_max": 276.92,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 974,
                            "humidity": 68,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 3
                        },
                        "wind": {
                            "speed": 0.81,
                            "deg": 96,
                            "gust": 0.74
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 06:00:00"
                    },
                    {
                        "dt": 1649235600,
                        "main": {
                            "temp": 284.05,
                            "feels_like": 282.58,
                            "temp_min": 284.05,
                            "temp_max": 284.05,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 53,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 0.62,
                            "deg": 218,
                            "gust": 0.94
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 09:00:00"
                    },
                    {
                        "dt": 1649246400,
                        "main": {
                            "temp": 288.21,
                            "feels_like": 286.97,
                            "temp_min": 288.21,
                            "temp_max": 288.21,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 977,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 2.48,
                            "deg": 283,
                            "gust": 2.56
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 12:00:00"
                    },
                    {
                        "dt": 1649257200,
                        "main": {
                            "temp": 288.75,
                            "feels_like": 287.72,
                            "temp_min": 288.75,
                            "temp_max": 288.75,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 52,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 19
                        },
                        "wind": {
                            "speed": 4.99,
                            "deg": 288,
                            "gust": 5.04
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 15:00:00"
                    },
                    {
                        "dt": 1649268000,
                        "main": {
                            "temp": 284.75,
                            "feels_like": 283.85,
                            "temp_min": 284.75,
                            "temp_max": 284.75,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 978,
                            "humidity": 72,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 48
                        },
                        "wind": {
                            "speed": 4.25,
                            "deg": 293,
                            "gust": 6.48
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 18:00:00"
                    },
                    {
                        "dt": 1649278800,
                        "main": {
                            "temp": 280.53,
                            "feels_like": 280.53,
                            "temp_min": 280.53,
                            "temp_max": 280.53,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 980,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 69
                        },
                        "wind": {
                            "speed": 1.04,
                            "deg": 246,
                            "gust": 2.95
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 21:00:00"
                    },
                    {
                        "dt": 1649289600,
                        "main": {
                            "temp": 280.51,
                            "feels_like": 280.51,
                            "temp_min": 280.51,
                            "temp_max": 280.51,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 980,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 76
                        },
                        "wind": {
                            "speed": 1.09,
                            "deg": 192,
                            "gust": 1.21
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 00:00:00"
                    },
                    {
                        "dt": 1649300400,
                        "main": {
                            "temp": 281.44,
                            "feels_like": 281.44,
                            "temp_min": 281.44,
                            "temp_max": 281.44,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 980,
                            "humidity": 90,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 1.24,
                            "deg": 205,
                            "gust": 1.62
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 03:00:00"
                    },
                    {
                        "dt": 1649311200,
                        "main": {
                            "temp": 281.55,
                            "feels_like": 280.78,
                            "temp_min": 281.55,
                            "temp_max": 281.55,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 980,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.68,
                            "deg": 182,
                            "gust": 3.73
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 06:00:00"
                    },
                    {
                        "dt": 1649322000,
                        "main": {
                            "temp": 283.54,
                            "feels_like": 282.72,
                            "temp_min": 283.54,
                            "temp_max": 283.54,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 981,
                            "humidity": 80,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.56,
                            "deg": 204,
                            "gust": 4.65
                        },
                        "visibility": 10000,
                        "pop": 0.08,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 09:00:00"
                    },
                    {
                        "dt": 1649332800,
                        "main": {
                            "temp": 286.56,
                            "feels_like": 285.65,
                            "temp_min": 286.56,
                            "temp_max": 286.56,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 981,
                            "humidity": 65,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 4.39,
                            "deg": 231,
                            "gust": 5.65
                        },
                        "visibility": 10000,
                        "pop": 0.24,
                        "rain": {
                            "3h": 0.13
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 12:00:00"
                    },
                    {
                        "dt": 1649343600,
                        "main": {
                            "temp": 287.82,
                            "feels_like": 286.83,
                            "temp_min": 287.82,
                            "temp_max": 287.82,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 980,
                            "humidity": 57,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 88
                        },
                        "wind": {
                            "speed": 4.86,
                            "deg": 241,
                            "gust": 6.18
                        },
                        "visibility": 10000,
                        "pop": 0.12,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 15:00:00"
                    },
                    {
                        "dt": 1649354400,
                        "main": {
                            "temp": 285.37,
                            "feels_like": 284.48,
                            "temp_min": 285.37,
                            "temp_max": 285.37,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 980,
                            "humidity": 70,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 57
                        },
                        "wind": {
                            "speed": 4.41,
                            "deg": 234,
                            "gust": 6.67
                        },
                        "visibility": 10000,
                        "pop": 0.08,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 18:00:00"
                    },
                    {
                        "dt": 1649365200,
                        "main": {
                            "temp": 281.45,
                            "feels_like": 280.06,
                            "temp_min": 281.45,
                            "temp_max": 281.45,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 981,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 72
                        },
                        "wind": {
                            "speed": 2.37,
                            "deg": 182,
                            "gust": 5.15
                        },
                        "visibility": 10000,
                        "pop": 0.12,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 21:00:00"
                    },
                    {
                        "dt": 1649376000,
                        "main": {
                            "temp": 281.15,
                            "feels_like": 279.91,
                            "temp_min": 281.15,
                            "temp_max": 281.15,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 979,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 80
                        },
                        "wind": {
                            "speed": 2.12,
                            "deg": 176,
                            "gust": 7.02
                        },
                        "visibility": 10000,
                        "pop": 0.32,
                        "rain": {
                            "3h": 0.13
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 00:00:00"
                    },
                    {
                        "dt": 1649386800,
                        "main": {
                            "temp": 281.08,
                            "feels_like": 279.44,
                            "temp_min": 281.08,
                            "temp_max": 281.08,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 978,
                            "humidity": 96,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 96
                        },
                        "wind": {
                            "speed": 2.61,
                            "deg": 194,
                            "gust": 8.28
                        },
                        "visibility": 10000,
                        "pop": 0.15,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 03:00:00"
                    },
                    {
                        "dt": 1649397600,
                        "main": {
                            "temp": 281.9,
                            "feels_like": 279.99,
                            "temp_min": 281.9,
                            "temp_max": 281.9,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 977,
                            "humidity": 96,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 93
                        },
                        "wind": {
                            "speed": 3.29,
                            "deg": 187,
                            "gust": 10.03
                        },
                        "visibility": 10000,
                        "pop": 0.25,
                        "rain": {
                            "3h": 0.17
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 06:00:00"
                    },
                    {
                        "dt": 1649408400,
                        "main": {
                            "temp": 283.78,
                            "feels_like": 283.27,
                            "temp_min": 283.78,
                            "temp_max": 283.78,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 977,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 96
                        },
                        "wind": {
                            "speed": 4.86,
                            "deg": 202,
                            "gust": 10.67
                        },
                        "visibility": 10000,
                        "pop": 0.52,
                        "rain": {
                            "3h": 0.25
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 09:00:00"
                    },
                    {
                        "dt": 1649419200,
                        "main": {
                            "temp": 284.28,
                            "feels_like": 283.9,
                            "temp_min": 284.28,
                            "temp_max": 284.28,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 976,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 6.17,
                            "deg": 210,
                            "gust": 11.67
                        },
                        "visibility": 10000,
                        "pop": 0.84,
                        "rain": {
                            "3h": 2.31
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 12:00:00"
                    },
                    {
                        "dt": 1649430000,
                        "main": {
                            "temp": 284.24,
                            "feels_like": 283.96,
                            "temp_min": 284.24,
                            "temp_max": 284.24,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 975,
                            "humidity": 98,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 501,
                                "main": "Rain",
                                "description": "moderate rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 5.78,
                            "deg": 208,
                            "gust": 12.54
                        },
                        "visibility": 1385,
                        "pop": 0.97,
                        "rain": {
                            "3h": 9.71
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 15:00:00"
                    },
                    {
                        "dt": 1649440800,
                        "main": {
                            "temp": 284.66,
                            "feels_like": 284.45,
                            "temp_min": 284.66,
                            "temp_max": 284.66,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 99,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 502,
                                "main": "Rain",
                                "description": "heavy intensity rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 4.47,
                            "deg": 231,
                            "gust": 9.98
                        },
                        "visibility": 202,
                        "pop": 1,
                        "rain": {
                            "3h": 12.27
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 18:00:00"
                    },
                    {
                        "dt": 1649451600,
                        "main": {
                            "temp": 284.78,
                            "feels_like": 284.58,
                            "temp_min": 284.78,
                            "temp_max": 284.78,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 977,
                            "humidity": 99,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 501,
                                "main": "Rain",
                                "description": "moderate rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.17,
                            "deg": 224,
                            "gust": 8.6
                        },
                        "visibility": 98,
                        "pop": 1,
                        "rain": {
                            "3h": 3.94
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 21:00:00"
                    },
                    {
                        "dt": 1649462400,
                        "main": {
                            "temp": 284.87,
                            "feels_like": 284.68,
                            "temp_min": 284.87,
                            "temp_max": 284.87,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 99,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 3.3,
                            "deg": 227,
                            "gust": 8.67
                        },
                        "visibility": 124,
                        "pop": 1,
                        "rain": {
                            "3h": 1.48
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 00:00:00"
                    },
                    {
                        "dt": 1649473200,
                        "main": {
                            "temp": 284.93,
                            "feels_like": 284.75,
                            "temp_min": 284.93,
                            "temp_max": 284.93,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 99,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.61,
                            "deg": 215,
                            "gust": 7.65
                        },
                        "visibility": 99,
                        "pop": 1,
                        "rain": {
                            "3h": 1.17
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 03:00:00"
                    },
                    {
                        "dt": 1649484000,
                        "main": {
                            "temp": 284.4,
                            "feels_like": 284.11,
                            "temp_min": 284.4,
                            "temp_max": 284.4,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 975,
                            "humidity": 97,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.47,
                            "deg": 209,
                            "gust": 5.85
                        },
                        "visibility": 10000,
                        "pop": 0.97,
                        "rain": {
                            "3h": 0.6
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 06:00:00"
                    },
                    {
                        "dt": 1649494800,
                        "main": {
                            "temp": 286.06,
                            "feels_like": 285.83,
                            "temp_min": 286.06,
                            "temp_max": 286.06,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 976,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.17,
                            "deg": 205,
                            "gust": 4.8
                        },
                        "visibility": 10000,
                        "pop": 0.79,
                        "rain": {
                            "3h": 0.56
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 09:00:00"
                    },
                    {
                        "dt": 1649505600,
                        "main": {
                            "temp": 286.25,
                            "feels_like": 286.07,
                            "temp_min": 286.25,
                            "temp_max": 286.25,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 975,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.82,
                            "deg": 184,
                            "gust": 5.5
                        },
                        "visibility": 10000,
                        "pop": 0.79,
                        "rain": {
                            "3h": 0.83
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 12:00:00"
                    },
                    {
                        "dt": 1649516400,
                        "main": {
                            "temp": 289.02,
                            "feels_like": 288.78,
                            "temp_min": 289.02,
                            "temp_max": 289.02,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 973,
                            "humidity": 81,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 2.98,
                            "deg": 220,
                            "gust": 5.17
                        },
                        "visibility": 10000,
                        "pop": 0.71,
                        "rain": {
                            "3h": 0.96
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 15:00:00"
                    },
                    {
                        "dt": 1649527200,
                        "main": {
                            "temp": 287.72,
                            "feels_like": 287.53,
                            "temp_min": 287.72,
                            "temp_max": 287.72,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 972,
                            "humidity": 88,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.97,
                            "deg": 232,
                            "gust": 4.94
                        },
                        "visibility": 10000,
                        "pop": 0.65,
                        "rain": {
                            "3h": 1.02
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 18:00:00"
                    },
                    {
                        "dt": 1649538000,
                        "main": {
                            "temp": 284.12,
                            "feels_like": 283.75,
                            "temp_min": 284.12,
                            "temp_max": 284.12,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 971,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 94
                        },
                        "wind": {
                            "speed": 0.88,
                            "deg": 114,
                            "gust": 1.18
                        },
                        "visibility": 10000,
                        "pop": 0.32,
                        "rain": {
                            "3h": 0.13
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 21:00:00"
                    },
                    {
                        "dt": 1649548800,
                        "main": {
                            "temp": 283.42,
                            "feels_like": 282.98,
                            "temp_min": 283.42,
                            "temp_max": 283.42,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 970,
                            "humidity": 95,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 84
                        },
                        "wind": {
                            "speed": 1.17,
                            "deg": 130,
                            "gust": 1.48
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 00:00:00"
                    },
                    {
                        "dt": 1649559600,
                        "main": {
                            "temp": 282.47,
                            "feels_like": 281.92,
                            "temp_min": 282.47,
                            "temp_max": 282.47,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 968,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 5
                        },
                        "wind": {
                            "speed": 1.6,
                            "deg": 123,
                            "gust": 2.47
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 03:00:00"
                    },
                    {
                        "dt": 1649570400,
                        "main": {
                            "temp": 281.72,
                            "feels_like": 280.75,
                            "temp_min": 281.72,
                            "temp_max": 281.72,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 966,
                            "humidity": 92,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 5
                        },
                        "wind": {
                            "speed": 1.92,
                            "deg": 122,
                            "gust": 3.03
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 06:00:00"
                    },
                    {
                        "dt": 1649581200,
                        "main": {
                            "temp": 287.21,
                            "feels_like": 286.45,
                            "temp_min": 287.21,
                            "temp_max": 287.21,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 967,
                            "humidity": 68,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.65,
                            "deg": 169,
                            "gust": 9.17
                        },
                        "visibility": 10000,
                        "pop": 0.03,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 09:00:00"
                    },
                    {
                        "dt": 1649592000,
                        "main": {
                            "temp": 286.8,
                            "feels_like": 285.92,
                            "temp_min": 286.8,
                            "temp_max": 286.8,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 966,
                            "humidity": 65,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.97,
                            "deg": 195,
                            "gust": 5.18
                        },
                        "visibility": 10000,
                        "pop": 0.19,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 12:00:00"
                    },
                    {
                        "dt": 1649602800,
                        "main": {
                            "temp": 285.52,
                            "feels_like": 284.77,
                            "temp_min": 285.52,
                            "temp_max": 285.52,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 965,
                            "humidity": 75,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.56,
                            "deg": 269,
                            "gust": 5.88
                        },
                        "visibility": 10000,
                        "pop": 0.43,
                        "rain": {
                            "3h": 0.25
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 15:00:00"
                    }
                ],
                "city": {
                    "id": 2735941,
                    "name": "Porto",
                    "coord": {
                        "lat": 41.25,
                        "lon": -8.3333
                    },
                    "country": "PT",
                    "population": 0,
                    "timezone": 3600,
                    "sunrise": 1649139002,
                    "sunset": 1649185303
                }
            }
        },
        {
            nome:'Faro',
            codigo:2268337,
            data:{
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1649181600,
                        "main": {
                            "temp": 287.8,
                            "feels_like": 287.17,
                            "temp_min": 285.72,
                            "temp_max": 287.8,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 991,
                            "humidity": 71,
                            "temp_kf": 2.08
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 4.08,
                            "deg": 62,
                            "gust": 6.52
                        },
                        "visibility": 10000,
                        "pop": 0.75,
                        "rain": {
                            "3h": 0.24
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-05 18:00:00"
                    },
                    {
                        "dt": 1649192400,
                        "main": {
                            "temp": 286.1,
                            "feels_like": 285.49,
                            "temp_min": 282.69,
                            "temp_max": 286.1,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 994,
                            "humidity": 78,
                            "temp_kf": 3.41
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 3.96,
                            "deg": 24,
                            "gust": 8.04
                        },
                        "visibility": 10000,
                        "pop": 0.1,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-05 21:00:00"
                    },
                    {
                        "dt": 1649203200,
                        "main": {
                            "temp": 282.97,
                            "feels_like": 281.32,
                            "temp_min": 280.55,
                            "temp_max": 282.97,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 995,
                            "humidity": 86,
                            "temp_kf": 2.42
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 92
                        },
                        "wind": {
                            "speed": 3.23,
                            "deg": 359,
                            "gust": 6.92
                        },
                        "visibility": 10000,
                        "pop": 0.07,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 00:00:00"
                    },
                    {
                        "dt": 1649214000,
                        "main": {
                            "temp": 279.36,
                            "feels_like": 276.8,
                            "temp_min": 279.36,
                            "temp_max": 279.36,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 995,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 94
                        },
                        "wind": {
                            "speed": 3.48,
                            "deg": 349,
                            "gust": 7.66
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 03:00:00"
                    },
                    {
                        "dt": 1649224800,
                        "main": {
                            "temp": 278.91,
                            "feels_like": 276.25,
                            "temp_min": 278.91,
                            "temp_max": 278.91,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 997,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 70
                        },
                        "wind": {
                            "speed": 3.48,
                            "deg": 353,
                            "gust": 9.54
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 06:00:00"
                    },
                    {
                        "dt": 1649235600,
                        "main": {
                            "temp": 284.39,
                            "feels_like": 283.27,
                            "temp_min": 284.39,
                            "temp_max": 284.39,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1000,
                            "humidity": 65,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 35
                        },
                        "wind": {
                            "speed": 4.46,
                            "deg": 349,
                            "gust": 7.66
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 09:00:00"
                    },
                    {
                        "dt": 1649246400,
                        "main": {
                            "temp": 289.51,
                            "feels_like": 288.25,
                            "temp_min": 289.51,
                            "temp_max": 289.51,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1000,
                            "humidity": 40,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 27
                        },
                        "wind": {
                            "speed": 3.5,
                            "deg": 325,
                            "gust": 4.84
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 12:00:00"
                    },
                    {
                        "dt": 1649257200,
                        "main": {
                            "temp": 291.1,
                            "feels_like": 290.05,
                            "temp_min": 291.1,
                            "temp_max": 291.1,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 999,
                            "humidity": 42,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 3
                        },
                        "wind": {
                            "speed": 5.04,
                            "deg": 307,
                            "gust": 5.55
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 15:00:00"
                    },
                    {
                        "dt": 1649268000,
                        "main": {
                            "temp": 288.25,
                            "feels_like": 287.36,
                            "temp_min": 288.25,
                            "temp_max": 288.25,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1001,
                            "humidity": 59,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 4
                        },
                        "wind": {
                            "speed": 4.77,
                            "deg": 310,
                            "gust": 7.01
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-06 18:00:00"
                    },
                    {
                        "dt": 1649278800,
                        "main": {
                            "temp": 283.37,
                            "feels_like": 282.85,
                            "temp_min": 283.37,
                            "temp_max": 283.37,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1003,
                            "humidity": 92,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.16,
                            "deg": 332,
                            "gust": 7.39
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-06 21:00:00"
                    },
                    {
                        "dt": 1649289600,
                        "main": {
                            "temp": 283.15,
                            "feels_like": 281.29,
                            "temp_min": 283.15,
                            "temp_max": 283.15,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1004,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 3.71,
                            "deg": 352,
                            "gust": 8.83
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 00:00:00"
                    },
                    {
                        "dt": 1649300400,
                        "main": {
                            "temp": 282.05,
                            "feels_like": 280.19,
                            "temp_min": 282.05,
                            "temp_max": 282.05,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1004,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 42
                        },
                        "wind": {
                            "speed": 3.25,
                            "deg": 354,
                            "gust": 8.02
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 03:00:00"
                    },
                    {
                        "dt": 1649311200,
                        "main": {
                            "temp": 281.11,
                            "feels_like": 279.43,
                            "temp_min": 281.11,
                            "temp_max": 281.11,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1004,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 25
                        },
                        "wind": {
                            "speed": 2.68,
                            "deg": 357,
                            "gust": 5.33
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 06:00:00"
                    },
                    {
                        "dt": 1649322000,
                        "main": {
                            "temp": 286.65,
                            "feels_like": 285.86,
                            "temp_min": 286.65,
                            "temp_max": 286.65,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 1005,
                            "humidity": 69,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 5
                        },
                        "wind": {
                            "speed": 2.95,
                            "deg": 353,
                            "gust": 4.22
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 09:00:00"
                    },
                    {
                        "dt": 1649332800,
                        "main": {
                            "temp": 291.28,
                            "feels_like": 290.48,
                            "temp_min": 291.28,
                            "temp_max": 291.28,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1004,
                            "humidity": 51,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 2.08,
                            "deg": 294,
                            "gust": 2.98
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 12:00:00"
                    },
                    {
                        "dt": 1649343600,
                        "main": {
                            "temp": 292.49,
                            "feels_like": 291.81,
                            "temp_min": 292.49,
                            "temp_max": 292.49,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1003,
                            "humidity": 51,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 3.31,
                            "deg": 254,
                            "gust": 4.1
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 15:00:00"
                    },
                    {
                        "dt": 1649354400,
                        "main": {
                            "temp": 289.68,
                            "feels_like": 288.9,
                            "temp_min": 289.68,
                            "temp_max": 289.68,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1003,
                            "humidity": 58,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 4.37,
                            "deg": 313,
                            "gust": 6.8
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-07 18:00:00"
                    },
                    {
                        "dt": 1649365200,
                        "main": {
                            "temp": 283.66,
                            "feels_like": 283.06,
                            "temp_min": 283.66,
                            "temp_max": 283.66,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 1005,
                            "humidity": 88,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 0
                        },
                        "wind": {
                            "speed": 3.88,
                            "deg": 346,
                            "gust": 8.54
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-07 21:00:00"
                    },
                    {
                        "dt": 1649376000,
                        "main": {
                            "temp": 282.64,
                            "feels_like": 281.01,
                            "temp_min": 282.64,
                            "temp_max": 282.64,
                            "pressure": 1024,
                            "sea_level": 1024,
                            "grnd_level": 1004,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 3.06,
                            "deg": 349,
                            "gust": 7.13
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 00:00:00"
                    },
                    {
                        "dt": 1649386800,
                        "main": {
                            "temp": 282.17,
                            "feels_like": 280.97,
                            "temp_min": 282.17,
                            "temp_max": 282.17,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1003,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 6
                        },
                        "wind": {
                            "speed": 2.28,
                            "deg": 358,
                            "gust": 2.46
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 03:00:00"
                    },
                    {
                        "dt": 1649397600,
                        "main": {
                            "temp": 281.84,
                            "feels_like": 281.01,
                            "temp_min": 281.84,
                            "temp_max": 281.84,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1003,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 15
                        },
                        "wind": {
                            "speed": 1.79,
                            "deg": 357,
                            "gust": 1.75
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 06:00:00"
                    },
                    {
                        "dt": 1649408400,
                        "main": {
                            "temp": 287.47,
                            "feels_like": 286.81,
                            "temp_min": 287.47,
                            "temp_max": 287.47,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1004,
                            "humidity": 71,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.6,
                            "deg": 311,
                            "gust": 2.26
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 09:00:00"
                    },
                    {
                        "dt": 1649419200,
                        "main": {
                            "temp": 291.94,
                            "feels_like": 291.21,
                            "temp_min": 291.94,
                            "temp_max": 291.94,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1003,
                            "humidity": 51,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 94
                        },
                        "wind": {
                            "speed": 3.28,
                            "deg": 246,
                            "gust": 3.91
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 12:00:00"
                    },
                    {
                        "dt": 1649430000,
                        "main": {
                            "temp": 292.86,
                            "feels_like": 292.14,
                            "temp_min": 292.86,
                            "temp_max": 292.86,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1001,
                            "humidity": 48,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 54
                        },
                        "wind": {
                            "speed": 5.23,
                            "deg": 255,
                            "gust": 5.62
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 15:00:00"
                    },
                    {
                        "dt": 1649440800,
                        "main": {
                            "temp": 289.07,
                            "feels_like": 288.39,
                            "temp_min": 289.07,
                            "temp_max": 289.07,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1002,
                            "humidity": 64,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 72
                        },
                        "wind": {
                            "speed": 4.1,
                            "deg": 295,
                            "gust": 6.56
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-08 18:00:00"
                    },
                    {
                        "dt": 1649451600,
                        "main": {
                            "temp": 284.38,
                            "feels_like": 283.96,
                            "temp_min": 284.38,
                            "temp_max": 284.38,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1003,
                            "humidity": 92,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 2.19,
                            "deg": 335,
                            "gust": 2.6
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-08 21:00:00"
                    },
                    {
                        "dt": 1649462400,
                        "main": {
                            "temp": 283.77,
                            "feels_like": 283.32,
                            "temp_min": 283.77,
                            "temp_max": 283.77,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1002,
                            "humidity": 93,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.63,
                            "deg": 347,
                            "gust": 1.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 00:00:00"
                    },
                    {
                        "dt": 1649473200,
                        "main": {
                            "temp": 283.15,
                            "feels_like": 282.89,
                            "temp_min": 283.15,
                            "temp_max": 283.15,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1001,
                            "humidity": 92,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 58
                        },
                        "wind": {
                            "speed": 1.41,
                            "deg": 10,
                            "gust": 1.38
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 03:00:00"
                    },
                    {
                        "dt": 1649484000,
                        "main": {
                            "temp": 282.96,
                            "feels_like": 282.76,
                            "temp_min": 282.96,
                            "temp_max": 282.96,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1000,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 79
                        },
                        "wind": {
                            "speed": 1.34,
                            "deg": 34,
                            "gust": 1.26
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 06:00:00"
                    },
                    {
                        "dt": 1649494800,
                        "main": {
                            "temp": 289.02,
                            "feels_like": 288.26,
                            "temp_min": 289.02,
                            "temp_max": 289.02,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1000,
                            "humidity": 61,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 85
                        },
                        "wind": {
                            "speed": 1.55,
                            "deg": 120,
                            "gust": 1.94
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 09:00:00"
                    },
                    {
                        "dt": 1649505600,
                        "main": {
                            "temp": 292.45,
                            "feels_like": 291.64,
                            "temp_min": 292.45,
                            "temp_max": 292.45,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 998,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 87
                        },
                        "wind": {
                            "speed": 2.98,
                            "deg": 174,
                            "gust": 2.65
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 12:00:00"
                    },
                    {
                        "dt": 1649516400,
                        "main": {
                            "temp": 292.56,
                            "feels_like": 291.76,
                            "temp_min": 292.56,
                            "temp_max": 292.56,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 996,
                            "humidity": 46,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 3.41,
                            "deg": 190,
                            "gust": 2.73
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 15:00:00"
                    },
                    {
                        "dt": 1649527200,
                        "main": {
                            "temp": 289.16,
                            "feels_like": 288.44,
                            "temp_min": 289.16,
                            "temp_max": 289.16,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 995,
                            "humidity": 62,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.88,
                            "deg": 215,
                            "gust": 2.67
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-09 18:00:00"
                    },
                    {
                        "dt": 1649538000,
                        "main": {
                            "temp": 285.65,
                            "feels_like": 284.71,
                            "temp_min": 285.65,
                            "temp_max": 285.65,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 995,
                            "humidity": 67,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 1.32,
                            "deg": 97,
                            "gust": 1.46
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-09 21:00:00"
                    },
                    {
                        "dt": 1649548800,
                        "main": {
                            "temp": 284.56,
                            "feels_like": 283.27,
                            "temp_min": 284.56,
                            "temp_max": 284.56,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 993,
                            "humidity": 58,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 58
                        },
                        "wind": {
                            "speed": 0.79,
                            "deg": 106,
                            "gust": 1.09
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 00:00:00"
                    },
                    {
                        "dt": 1649559600,
                        "main": {
                            "temp": 283.96,
                            "feels_like": 282.58,
                            "temp_min": 283.96,
                            "temp_max": 283.96,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 992,
                            "humidity": 57,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 35
                        },
                        "wind": {
                            "speed": 0.8,
                            "deg": 96,
                            "gust": 1.13
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 03:00:00"
                    },
                    {
                        "dt": 1649570400,
                        "main": {
                            "temp": 283.61,
                            "feels_like": 282.25,
                            "temp_min": 283.61,
                            "temp_max": 283.61,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 991,
                            "humidity": 59,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 23
                        },
                        "wind": {
                            "speed": 1.9,
                            "deg": 115,
                            "gust": 1.99
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2022-04-10 06:00:00"
                    },
                    {
                        "dt": 1649581200,
                        "main": {
                            "temp": 289.18,
                            "feels_like": 288.17,
                            "temp_min": 289.18,
                            "temp_max": 289.18,
                            "pressure": 1011,
                            "sea_level": 1011,
                            "grnd_level": 992,
                            "humidity": 51,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 85
                        },
                        "wind": {
                            "speed": 2.52,
                            "deg": 149,
                            "gust": 4.71
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 09:00:00"
                    },
                    {
                        "dt": 1649592000,
                        "main": {
                            "temp": 292.31,
                            "feels_like": 291.53,
                            "temp_min": 292.31,
                            "temp_max": 292.31,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 991,
                            "humidity": 48,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 92
                        },
                        "wind": {
                            "speed": 3.92,
                            "deg": 177,
                            "gust": 4.97
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 12:00:00"
                    },
                    {
                        "dt": 1649602800,
                        "main": {
                            "temp": 292.76,
                            "feels_like": 292.03,
                            "temp_min": 292.76,
                            "temp_max": 292.76,
                            "pressure": 1008,
                            "sea_level": 1008,
                            "grnd_level": 989,
                            "humidity": 48,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 4.23,
                            "deg": 174,
                            "gust": 5.72
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2022-04-10 15:00:00"
                    }
                ],
                "city": {
                    "id": 2268337,
                    "name": "Faro",
                    "coord": {
                        "lat": 37.2,
                        "lon": -8.1667
                    },
                    "country": "PT",
                    "population": 0,
                    "timezone": 3600,
                    "sunrise": 1649139150,
                    "sunset": 1649185075
                }
            }
        },
        
    ]);

});

router.get("/",function(req,res) {
    res.sendFile(__dirname+'/index.html');
});

app.use('/',router);

app.listen(process.env.port || 3000);

console.log('server ligado');




