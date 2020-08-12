import React from 'react';
import './Race.css';

import Start from '../Start/Start';

const Race = ({ date, name, scheduledStartTime, starts }) => (
  <div className="Race">
    <p className="raceDate">{date}</p>
    <h2 className="raceName">{name}</h2>
    <p className="raceStartTime">{scheduledStartTime}</p>
    {starts.length > 0 && starts.map(start => (
      <Start {...start}></Start>
    ))}
  </div>
);

Race.defaultProps = {
  "id": "2020-08-15_23_5",
  "name": "STL Klass I, Försök 3 i Meeting 6 (Final Solvalla 26 september)",
  "date": "2020-08-15",
  "number": 5,
  "distance": 2640,
  "startMethod": "volte",
  "startTime": "2020-08-15T16:20:00",
  "scheduledStartTime": "2020-08-15T16:20:00",
  "prize": "Pris: 110.000-55.000-27.500-14.500-9.000-6.000-5.000 (7 priser)",
  "terms": [
    "3-åriga och äldre 250.001 - 500.000 kr. Körsvenskrav kat. 1.",
    "Hederspris till segrande hästs ägare och hästskötare.",
    "2640 m. Voltstart."
  ],
  "sport": "trot",
  "track": {
    "id": 23,
    "name": "Romme",
    "countryCode": "SE"
  },
  "status": "upcoming",
  "pools": {
    "vinnare": {
      "@type": ".VinnarePool",
      "id": "vinnare_2020-08-15_23_5",
      "status": "bettable",
      "timestamp": "2020-08-12 08:29:28",
      "turnover": 141200
    },
    "plats": {
      "@type": ".PlatsPool",
      "id": "plats_2020-08-15_23_5",
      "status": "bettable",
      "timestamp": "2020-08-12 08:29:28",
      "turnover": 132200
    }
  },
  "starts": [
    {
      "number": 1,
      "postPosition": 1,
      "distance": 2640,
      "horse": {
        "id": 772367,
        "name": "Arden Wise As",
        "nationality": "IT",
        "age": 4,
        "sex": "stallion",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 3
          }
        },
        "trainer": {
          "id": 161607,
          "firstName": "Björn",
          "lastName": "Goop",
          "shortName": "Goo Bj",
          "location": "Karlstad",
          "birth": 1976,
          "homeTrack": {
            "id": 15,
            "name": "Färjestad"
          },
          "license": "A-tränare: (Sv/utland): träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 1052,
                "earnings": 3108369900,
                "placement": {
                  "3": 112,
                  "2": 156,
                  "1": 175
                },
                "winPercentage": 1663
              },
              "2020": {
                "starts": 701,
                "earnings": 2079974900,
                "placement": {
                  "3": 75,
                  "2": 109,
                  "1": 127
                },
                "winPercentage": 1811
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": false
          },
          "back": {
            "hasShoe": true,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": false
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 466013,
        "color": "brun",
        "homeTrack": {
          "id": 15,
          "name": "Färjestad"
        },
        "owner": {
          "id": 801160,
          "name": "Horses Our Passion S.r.l. mfl",
          "location": "Italien"
        },
        "breeder": {
          "id": 641946,
          "name": "Allev. Della Serenissima Ss"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 13,
              "earnings": 29137800,
              "placement": {
                "3": 2,
                "2": 1,
                "1": 3
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 11,
                    "tenths": 8
                  },
                  "place": 3
                }
              ]
            },
            "2020": {
              "starts": 5,
              "earnings": 17463500,
              "placement": {
                "3": 3,
                "2": 0,
                "1": 1
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 0
                  },
                  "place": 3
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 3
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 18,
            "earnings": 46601300,
            "placement": {
              "3": 5,
              "2": 1,
              "1": 4
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 11,
                  "tenths": 8
                },
                "place": 3,
                "year": "2019"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 1
                },
                "place": 3,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 3
                },
                "place": 1,
                "year": "2020"
              }
            ],
            "winPercentage": 2222,
            "placePercentage": 5555,
            "earningsPerStart": 2588961,
            "startPoints": 2345
          },
          "lastFiveStarts": {
            "averageOdds": 876
          }
        },
        "pedigree": {
          "father": {
            "id": 667295,
            "name": "Ready Cash",
            "nationality": "FR"
          },
          "mother": {
            "id": 725216,
            "name": "Garden Variety",
            "nationality": "US"
          },
          "grandfather": {
            "id": 188568,
            "name": "Tagliabue",
            "nationality": "US"
          }
        },
        "foreignOwned": true
      },
      "driver": {
        "id": 161607,
        "firstName": "Björn",
        "lastName": "Goop",
        "shortName": "Goo Bj",
        "location": "Karlstad",
        "birth": 1976,
        "homeTrack": {
          "id": 15,
          "name": "Färjestad"
        },
        "license": "A-tränare: (Sv/utland): träna, köra",
        "silks": "Mblå, guldf.midjeband, sömmar; guld",
        "statistics": {
          "years": {
            "2019": {
              "starts": 1043,
              "earnings": 4023125400,
              "placement": {
                "3": 114,
                "2": 149,
                "1": 198
              },
              "winPercentage": 1898
            },
            "2020": {
              "starts": 790,
              "earnings": 2554280200,
              "placement": {
                "3": 82,
                "2": 113,
                "1": 169
              },
              "winPercentage": 2139
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 2182
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 2497
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 1549
        }
      }
    },
    {
      "number": 2,
      "postPosition": 2,
      "distance": 2640,
      "horse": {
        "id": 745116,
        "name": "Hurricane Silas",
        "age": 5,
        "sex": "gelding",
        "record": {
          "code": "L",
          "startMethod": "volte",
          "distance": "long",
          "time": {
            "minutes": 1,
            "seconds": 15,
            "tenths": 1
          }
        },
        "trainer": {
          "id": 125464,
          "firstName": "Fredrik",
          "lastName": "Persson",
          "shortName": "Per Fr",
          "location": "Fågelmara",
          "birth": 1972,
          "homeTrack": {
            "id": 19,
            "name": "Kalmar"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 360,
                "earnings": 311874400,
                "placement": {
                  "3": 40,
                  "2": 49,
                  "1": 24
                },
                "winPercentage": 666
              },
              "2020": {
                "starts": 280,
                "earnings": 304659000,
                "placement": {
                  "3": 39,
                  "2": 26,
                  "1": 37
                },
                "winPercentage": 1321
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": false
          },
          "back": {
            "hasShoe": false,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": false
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 434400,
        "color": "brun",
        "homeTrack": {
          "id": 19,
          "name": "Kalmar"
        },
        "owner": {
          "id": 769174,
          "name": "Stall Feykir HB & Lennartsson Kristina"
        },
        "breeder": {
          "id": 732397,
          "name": "Lennartsson Kristina",
          "location": "Halltorp"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 14,
              "earnings": 9890000,
              "placement": {
                "3": 1,
                "2": 3,
                "1": 1
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 1
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 4
                  },
                  "place": 3
                }
              ]
            },
            "2020": {
              "starts": 8,
              "earnings": 24750000,
              "placement": {
                "3": 1,
                "2": 2,
                "1": 3
              },
              "records": [
                {
                  "code": "aL",
                  "startMethod": "auto",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 8
                  },
                  "place": 2
                },
                {
                  "code": "L",
                  "startMethod": "volte",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 1
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 30,
            "earnings": 43440000,
            "placement": {
              "3": 4,
              "2": 6,
              "1": 5
            },
            "records": [
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 1
                },
                "place": 1,
                "year": "2019"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 8
                },
                "place": 2,
                "year": "2020"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 1
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 4
                },
                "place": 3,
                "year": "2019"
              }
            ],
            "winPercentage": 1666,
            "placePercentage": 5000,
            "earningsPerStart": 1448000,
            "startPoints": 3040
          },
          "lastFiveStarts": {
            "averageOdds": 787
          }
        },
        "pedigree": {
          "father": {
            "id": 588796,
            "name": "Maharajah"
          },
          "mother": {
            "id": 572594,
            "name": "Regina Silas"
          },
          "grandfather": {
            "id": 161030,
            "name": "Super Arnie",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 125464,
        "firstName": "Fredrik",
        "lastName": "Persson",
        "shortName": "Per Fr",
        "location": "Fågelmara",
        "birth": 1972,
        "homeTrack": {
          "id": 19,
          "name": "Kalmar"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Vit, svart taggmönster; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 247,
              "earnings": 219974400,
              "placement": {
                "3": 26,
                "2": 38,
                "1": 19
              },
              "winPercentage": 769
            },
            "2020": {
              "starts": 129,
              "earnings": 112120000,
              "placement": {
                "3": 22,
                "2": 10,
                "1": 16
              },
              "winPercentage": 1240
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 945
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 709
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 1131
        }
      }
    },
    {
      "number": 3,
      "postPosition": 3,
      "distance": 2640,
      "horse": {
        "id": 721697,
        "name": "Luna Nera Doc",
        "age": 8,
        "sex": "mare",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 8
          }
        },
        "trainer": {
          "id": 659515,
          "firstName": "Oskar J",
          "lastName": "Andersson",
          "shortName": "And OJ",
          "location": "Sala",
          "birth": 1992,
          "homeTrack": {
            "id": 23,
            "name": "Romme"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 104,
                "earnings": 90810000,
                "placement": {
                  "3": 15,
                  "2": 11,
                  "1": 15
                },
                "winPercentage": 1442
              },
              "2020": {
                "starts": 112,
                "earnings": 108620000,
                "placement": {
                  "3": 12,
                  "2": 18,
                  "1": 21
                },
                "winPercentage": 1875
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": false
          },
          "back": {
            "hasShoe": false,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": true
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 493500,
        "color": "svartbrun",
        "homeTrack": {
          "id": 23,
          "name": "Romme"
        },
        "owner": {
          "id": 747532,
          "name": "Svensson Håkan B & HB Trend Center"
        },
        "breeder": {
          "id": 202816,
          "name": "Hultberg Dan",
          "location": "Hallsberg"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 9,
              "earnings": 1800000,
              "placement": {
                "3": 0,
                "2": 1,
                "1": 0
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 4
                  },
                  "place": 2
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 7
                  },
                  "place": 0
                }
              ]
            },
            "2020": {
              "starts": 7,
              "earnings": 9700000,
              "placement": {
                "3": 1,
                "2": 2,
                "1": 2
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 13,
                    "tenths": 4
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 2
                  },
                  "place": 2
                }
              ]
            }
          },
          "life": {
            "starts": 73,
            "earnings": 49350000,
            "placement": {
              "3": 4,
              "2": 8,
              "1": 10
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 7
                },
                "place": 0,
                "year": "2017"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 13,
                  "tenths": 4
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 5
                },
                "place": 1,
                "year": "2017"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 1
                },
                "place": 0,
                "year": "2018"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 8
                },
                "place": 1,
                "year": "2018"
              },
              {
                "code": "K",
                "startMethod": "volte",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 0
                },
                "place": 6,
                "year": "2018"
              }
            ],
            "winPercentage": 1369,
            "placePercentage": 3013,
            "earningsPerStart": 676027,
            "startPoints": 1960
          },
          "lastFiveStarts": {
            "averageOdds": 740
          }
        },
        "pedigree": {
          "father": {
            "id": 480383,
            "name": "Zerberus",
            "nationality": "DE"
          },
          "mother": {
            "id": 90701,
            "name": "Leana Bow"
          },
          "grandfather": {
            "id": 152357,
            "name": "Napoletano",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 191875,
        "firstName": "Kevin",
        "lastName": "Oscarsson",
        "shortName": "Osc Ke",
        "location": "Vislanda",
        "birth": 1995,
        "homeTrack": {
          "id": 19,
          "name": "Kalmar"
        },
        "license": "Körlicens kategori 1: köra",
        "silks": "Mörkblå, vita romber; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 820,
              "earnings": 916918300,
              "placement": {
                "3": 92,
                "2": 83,
                "1": 72
              },
              "winPercentage": 878
            },
            "2020": {
              "starts": 447,
              "earnings": 439955000,
              "placement": {
                "3": 46,
                "2": 33,
                "1": 39
              },
              "winPercentage": 872
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 677
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 89
        }
      }
    },
    {
      "number": 4,
      "postPosition": 4,
      "distance": 2640,
      "horse": {
        "id": 747480,
        "name": "A Deal is a Deal",
        "age": 5,
        "sex": "gelding",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 2
          }
        },
        "trainer": {
          "id": 2688,
          "firstName": "Erik",
          "lastName": "Berglöf",
          "shortName": "Ber Er",
          "location": "Karlstad",
          "birth": 1953,
          "homeTrack": {
            "id": 15,
            "name": "Färjestad"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 158,
                "earnings": 123327800,
                "placement": {
                  "3": 11,
                  "2": 17,
                  "1": 13
                },
                "winPercentage": 822
              },
              "2020": {
                "starts": 89,
                "earnings": 72179100,
                "placement": {
                  "3": 15,
                  "2": 7,
                  "1": 10
                },
                "winPercentage": 1123
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": false
          },
          "back": {
            "hasShoe": false,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": false
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 400942,
        "color": "brun",
        "homeTrack": {
          "id": 15,
          "name": "Färjestad"
        },
        "owner": {
          "id": 770598,
          "name": "AB Erik Berglöf & Loffen HB"
        },
        "breeder": {
          "id": 36791,
          "name": "Gustafsson Hans-Olof",
          "location": "Fengersfors"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 15,
              "earnings": 21124200,
              "placement": {
                "3": 2,
                "2": 1,
                "1": 4
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 7
                  },
                  "place": 6
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 2
                  },
                  "place": 1
                }
              ]
            },
            "2020": {
              "starts": 12,
              "earnings": 15350000,
              "placement": {
                "3": 3,
                "2": 3,
                "1": 3
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 6
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 3
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 30,
            "earnings": 40094200,
            "placement": {
              "3": 5,
              "2": 4,
              "1": 8
            },
            "records": [
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 6
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 0
                },
                "place": 4,
                "year": "2019"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 3
                },
                "place": 2,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 2
                },
                "place": 1,
                "year": "2019"
              }
            ],
            "winPercentage": 2666,
            "placePercentage": 5666,
            "earningsPerStart": 1336473,
            "startPoints": 1915
          },
          "lastFiveStarts": {
            "averageOdds": 509
          }
        },
        "pedigree": {
          "father": {
            "id": 453702,
            "name": "Super Photo Kosmos",
            "nationality": "US"
          },
          "mother": {
            "id": 597767,
            "name": "Crazy Love A.F."
          },
          "grandfather": {
            "id": 566695,
            "name": "In Love With You",
            "nationality": "FR"
          }
        }
      },
      "driver": {
        "id": 2688,
        "firstName": "Erik",
        "lastName": "Berglöf",
        "shortName": "Ber Er",
        "location": "Karlstad",
        "birth": 1953,
        "homeTrack": {
          "id": 15,
          "name": "Färjestad"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Vit, regnbågsfärgat axelsk och ärmb; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 136,
              "earnings": 102627800,
              "placement": {
                "3": 10,
                "2": 15,
                "1": 12
              },
              "winPercentage": 882
            },
            "2020": {
              "starts": 51,
              "earnings": 51419100,
              "placement": {
                "3": 10,
                "2": 3,
                "1": 9
              },
              "winPercentage": 1764
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 3002
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 1286
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 367
        }
      }
    },
    {
      "number": 5,
      "postPosition": 5,
      "distance": 2640,
      "horse": {
        "id": 729313,
        "name": "HögstenaStalldräng",
        "age": 7,
        "sex": "stallion",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 4
          }
        },
        "trainer": {
          "id": 167757,
          "firstName": "Mikko",
          "lastName": "Aho",
          "shortName": "Aho Mi",
          "location": "Göteborg",
          "birth": 1968,
          "homeTrack": {
            "id": 6,
            "name": "Åby"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 133,
                "earnings": 167145000,
                "placement": {
                  "3": 12,
                  "2": 24,
                  "1": 19
                },
                "winPercentage": 1428
              },
              "2020": {
                "starts": 72,
                "earnings": 71345000,
                "placement": {
                  "3": 9,
                  "2": 10,
                  "1": 8
                },
                "winPercentage": 1111
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": false
          },
          "back": {
            "hasShoe": true,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": false
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 491350,
        "color": "brun",
        "homeTrack": {
          "id": 6,
          "name": "Åby"
        },
        "owner": {
          "id": 579828,
          "name": "Granath Ulrika",
          "location": "Göteborg"
        },
        "breeder": {
          "id": 723418,
          "name": "Arvidsson Per, Anna",
          "location": "Erika & Sebastian"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 15,
              "earnings": 32185000,
              "placement": {
                "3": 0,
                "2": 6,
                "1": 5
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 13,
                    "tenths": 7
                  },
                  "place": 2
                },
                {
                  "code": "L",
                  "startMethod": "volte",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 6
                  },
                  "place": 2
                }
              ]
            },
            "2020": {
              "starts": 14,
              "earnings": 16950000,
              "placement": {
                "3": 2,
                "2": 3,
                "1": 1
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 5
                  },
                  "place": 6
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 4
                  },
                  "place": 6
                }
              ]
            }
          },
          "life": {
            "starts": 29,
            "earnings": 49135000,
            "placement": {
              "3": 2,
              "2": 9,
              "1": 6
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 5
                },
                "place": 6,
                "year": "2020"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 6
                },
                "place": 4,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 6
                },
                "place": 2,
                "year": "2020"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 4
                },
                "place": 6,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 4
                },
                "place": 6,
                "year": "2020"
              }
            ],
            "winPercentage": 2068,
            "placePercentage": 5862,
            "earningsPerStart": 1694310,
            "startPoints": 1770
          },
          "lastFiveStarts": {
            "averageOdds": 720
          }
        },
        "pedigree": {
          "father": {
            "id": 642441,
            "name": "Andover Andover",
            "nationality": "US"
          },
          "mother": {
            "id": 469355,
            "name": "Högstena Ludmila"
          },
          "grandfather": {
            "id": 98513,
            "name": "Lucky Winner",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 43521,
        "firstName": "Carl Johan",
        "lastName": "Jepson",
        "shortName": "Jep CJ",
        "location": "Karlstad",
        "birth": 1977,
        "homeTrack": {
          "id": 15,
          "name": "Färjestad"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Blå, silver axelparti och svart ärm; silv",
        "statistics": {
          "years": {
            "2019": {
              "starts": 1571,
              "earnings": 3543348500,
              "placement": {
                "3": 169,
                "2": 226,
                "1": 222
              },
              "winPercentage": 1413
            },
            "2020": {
              "starts": 844,
              "earnings": 1179461000,
              "placement": {
                "3": 107,
                "2": 109,
                "1": 93
              },
              "winPercentage": 1101
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 9999,
          "maxOdds": 9999
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 771
        }
      }
    },
    {
      "number": 6,
      "postPosition": 6,
      "distance": 2640,
      "horse": {
        "id": 736480,
        "name": "Viscount",
        "age": 6,
        "sex": "gelding",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 4
          }
        },
        "trainer": {
          "id": 659515,
          "firstName": "Oskar J",
          "lastName": "Andersson",
          "shortName": "And OJ",
          "location": "Sala",
          "birth": 1992,
          "homeTrack": {
            "id": 23,
            "name": "Romme"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 104,
                "earnings": 90810000,
                "placement": {
                  "3": 15,
                  "2": 11,
                  "1": 15
                },
                "winPercentage": 1442
              },
              "2020": {
                "starts": 112,
                "earnings": 108620000,
                "placement": {
                  "3": 12,
                  "2": 18,
                  "1": 21
                },
                "winPercentage": 1875
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": true
          },
          "back": {
            "hasShoe": false,
            "changed": true
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": true
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 434500,
        "color": "brun",
        "homeTrack": {
          "id": 23,
          "name": "Romme"
        },
        "owner": {
          "id": 134918,
          "name": "Easy KB",
          "location": "Uppsala"
        },
        "breeder": {
          "id": 36822,
          "name": "Menhammar Stuteri AB",
          "location": "Ekerö"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 1,
              "earnings": 50000,
              "placement": {
                "3": 0,
                "2": 0,
                "1": 0
              },
              "records": [
                {
                  "code": "aL",
                  "startMethod": "auto",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 17,
                    "tenths": 5
                  },
                  "place": 0
                }
              ]
            },
            "2020": {
              "starts": 5,
              "earnings": 9750000,
              "placement": {
                "3": 1,
                "2": 0,
                "1": 4
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 9
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 7
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 22,
            "earnings": 43450000,
            "placement": {
              "3": 2,
              "2": 2,
              "1": 7
            },
            "records": [
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 9
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 1
                },
                "place": 3,
                "year": "2017"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 4
                },
                "place": 2,
                "year": "2018"
              }
            ],
            "winPercentage": 3181,
            "placePercentage": 5000,
            "earningsPerStart": 1975000,
            "startPoints": 2275
          },
          "lastFiveStarts": {
            "averageOdds": 521
          }
        },
        "pedigree": {
          "father": {
            "id": 426861,
            "name": "From Above"
          },
          "mother": {
            "id": 517014,
            "name": "Infanta"
          },
          "grandfather": {
            "id": 166013,
            "name": "Express Ride",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 125542,
        "firstName": "Erik",
        "lastName": "Adielsson",
        "shortName": "Adi Er",
        "location": "Upplands Väsby",
        "birth": 1974,
        "homeTrack": {
          "id": 5,
          "name": "Solvalla"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Blå, vita ärmbindlar; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 808,
              "earnings": 2843805900,
              "placement": {
                "3": 55,
                "2": 101,
                "1": 135
              },
              "winPercentage": 1670
            },
            "2020": {
              "starts": 591,
              "earnings": 1395785000,
              "placement": {
                "3": 56,
                "2": 68,
                "1": 82
              },
              "winPercentage": 1387
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 118
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 102
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 3316
        }
      }
    },
    {
      "number": 7,
      "postPosition": 7,
      "distance": 2640,
      "horse": {
        "id": 762414,
        "name": "Galba Ringeat",
        "nationality": "FR",
        "age": 4,
        "sex": "gelding",
        "record": {
          "code": "L",
          "startMethod": "volte",
          "distance": "long",
          "time": {
            "minutes": 1,
            "seconds": 15,
            "tenths": 8
          }
        },
        "trainer": {
          "id": 608305,
          "firstName": "Jörgen S",
          "lastName": "Eriksson",
          "shortName": "Eri JS",
          "location": "Eskilstuna",
          "birth": 1987,
          "homeTrack": {
            "id": 14,
            "name": "Eskilstuna"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 200,
                "earnings": 220054700,
                "placement": {
                  "3": 14,
                  "2": 22,
                  "1": 30
                },
                "winPercentage": 1500
              },
              "2020": {
                "starts": 138,
                "earnings": 143440000,
                "placement": {
                  "3": 19,
                  "2": 19,
                  "1": 16
                },
                "winPercentage": 1159
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": false,
            "changed": false
          },
          "back": {
            "hasShoe": false,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": false
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 288500,
        "color": "svartbrun",
        "homeTrack": {
          "id": 14,
          "name": "Eskilstuna"
        },
        "owner": {
          "id": 798254,
          "name": "Horse Breeding In Sweden AB",
          "location": "Västerås"
        },
        "breeder": {
          "id": 777880,
          "name": "Loncke T & M & E.A.R.L. Wecxsteen"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 5,
              "earnings": 7650000,
              "placement": {
                "3": 0,
                "2": 0,
                "1": 2
              },
              "records": [
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 16,
                    "tenths": 9
                  },
                  "place": 1
                }
              ]
            },
            "2020": {
              "starts": 12,
              "earnings": 21200000,
              "placement": {
                "3": 2,
                "2": 4,
                "1": 2
              },
              "records": [
                {
                  "code": "aL",
                  "startMethod": "auto",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 5
                  },
                  "place": 3
                },
                {
                  "code": "L",
                  "startMethod": "volte",
                  "distance": "long",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 8
                  },
                  "place": 2
                }
              ]
            }
          },
          "life": {
            "starts": 17,
            "earnings": 28850000,
            "placement": {
              "3": 2,
              "2": 4,
              "1": 4
            },
            "records": [
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 0
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 5
                },
                "place": 3,
                "year": "2020"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 8
                },
                "place": 2,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 9
                },
                "place": 1,
                "year": "2019"
              }
            ],
            "winPercentage": 2352,
            "placePercentage": 5882,
            "earningsPerStart": 1697058,
            "startPoints": 1530
          },
          "lastFiveStarts": {
            "averageOdds": 897
          }
        },
        "pedigree": {
          "father": {
            "id": 739704,
            "name": "Bird Parker",
            "nationality": "FR"
          },
          "mother": {
            "id": 762413,
            "name": "Querida des Fouees",
            "nationality": "FR"
          },
          "grandfather": {
            "id": 569014,
            "name": "Bassano",
            "nationality": "FR"
          }
        }
      },
      "driver": {
        "id": 608305,
        "firstName": "Jörgen S",
        "lastName": "Eriksson",
        "shortName": "Eri JS",
        "location": "Eskilstuna",
        "birth": 1987,
        "homeTrack": {
          "id": 14,
          "name": "Eskilstuna"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Svart/vröd, diagonalt delad, ärmb; sv",
        "statistics": {
          "years": {
            "2019": {
              "starts": 150,
              "earnings": 172970000,
              "placement": {
                "3": 10,
                "2": 18,
                "1": 24
              },
              "winPercentage": 1600
            },
            "2020": {
              "starts": 140,
              "earnings": 136320000,
              "placement": {
                "3": 16,
                "2": 18,
                "1": 14
              },
              "winPercentage": 1000
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 9999,
          "maxOdds": 9999
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 204
        }
      }
    },
    {
      "number": 8,
      "postPosition": 8,
      "distance": 2640,
      "horse": {
        "id": 751754,
        "name": "Matadoren Eme",
        "age": 4,
        "sex": "stallion",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 7
          }
        },
        "trainer": {
          "id": 686921,
          "firstName": "Joakim",
          "lastName": "Hisved",
          "shortName": "His Jo",
          "location": "Borlänge",
          "birth": 1983,
          "homeTrack": {
            "id": 23,
            "name": "Romme"
          },
          "license": "B-tränare: träna, köra för bolag",
          "statistics": {
            "years": {
              "2019": {
                "starts": 12,
                "earnings": 42250000,
                "placement": {
                  "3": 2,
                  "2": 4,
                  "1": 3
                },
                "winPercentage": 2500
              },
              "2020": {
                "starts": 5,
                "earnings": 5700000,
                "placement": {
                  "3": 3,
                  "2": 0,
                  "1": 0
                },
                "winPercentage": 0
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": true
          },
          "back": {
            "hasShoe": true,
            "changed": true
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": false
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 479500,
        "color": "brun",
        "homeTrack": {
          "id": 23,
          "name": "Romme"
        },
        "owner": {
          "id": 774329,
          "name": "Hisved Joakim & Eva"
        },
        "breeder": {
          "id": 506907,
          "name": "Edshammar Maria",
          "location": "Sollebrunn"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 12,
              "earnings": 42250000,
              "placement": {
                "3": 2,
                "2": 4,
                "1": 3
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 1
                  },
                  "place": 3
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 7
                  },
                  "place": 1
                }
              ]
            },
            "2020": {
              "starts": 5,
              "earnings": 5700000,
              "placement": {
                "3": 3,
                "2": 0,
                "1": 0
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 5
                  },
                  "place": 3
                }
              ]
            }
          },
          "life": {
            "starts": 17,
            "earnings": 47950000,
            "placement": {
              "3": 5,
              "2": 4,
              "1": 3
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 1
                },
                "place": 3,
                "year": "2019"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 5
                },
                "place": 3,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 7
                },
                "place": 1,
                "year": "2019"
              }
            ],
            "winPercentage": 1764,
            "placePercentage": 7058,
            "earningsPerStart": 2820588,
            "startPoints": 870
          },
          "lastFiveStarts": {
            "averageOdds": 1767
          }
        },
        "pedigree": {
          "father": {
            "id": 453702,
            "name": "Super Photo Kosmos",
            "nationality": "US"
          },
          "mother": {
            "id": 538807,
            "name": "Busan Eme"
          },
          "grandfather": {
            "id": 2456,
            "name": "Alf Palema",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 110358,
        "firstName": "Tomas",
        "lastName": "Pettersson",
        "shortName": "Pet To",
        "location": "Alfta",
        "birth": 1978,
        "homeTrack": {
          "id": 12,
          "name": "Bollnäs"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Blå, röd/mblå/röd axelskärp och ärmb;blå",
        "statistics": {
          "years": {
            "2019": {
              "starts": 667,
              "earnings": 555032500,
              "placement": {
                "3": 78,
                "2": 79,
                "1": 50
              },
              "winPercentage": 749
            },
            "2020": {
              "starts": 296,
              "earnings": 189415000,
              "placement": {
                "3": 29,
                "2": 30,
                "1": 19
              },
              "winPercentage": 641
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 9999,
          "maxOdds": 9999
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 181
        }
      }
    },
    {
      "number": 9,
      "postPosition": 9,
      "distance": 2640,
      "horse": {
        "id": 737515,
        "name": "Helios di Quattro",
        "age": 6,
        "sex": "gelding",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 6
          }
        },
        "trainer": {
          "id": 7451,
          "firstName": "Reijo",
          "lastName": "Liljendahl",
          "shortName": "Lil Re",
          "location": "Heby",
          "birth": 1955,
          "homeTrack": {
            "id": 5,
            "name": "Solvalla"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 204,
                "earnings": 434035000,
                "placement": {
                  "3": 15,
                  "2": 24,
                  "1": 33
                },
                "winPercentage": 1617
              },
              "2020": {
                "starts": 171,
                "earnings": 321241800,
                "placement": {
                  "3": 20,
                  "2": 18,
                  "1": 23
                },
                "winPercentage": 1345
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": false
          },
          "back": {
            "hasShoe": true,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": false
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 368700,
        "color": "mörkbrun",
        "homeTrack": {
          "id": 5,
          "name": "Solvalla"
        },
        "owner": {
          "id": 594925,
          "name": "Transportbolaget i Eskilstuna AB"
        },
        "breeder": {
          "id": 599938,
          "name": "Stal Quattro V.O.F.",
          "location": "Nederländerna"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 14,
              "earnings": 8460000,
              "placement": {
                "3": 3,
                "2": 1,
                "1": 1
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 8
                  },
                  "place": 6
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 6
                  },
                  "place": 4
                }
              ]
            },
            "2020": {
              "starts": 7,
              "earnings": 9100000,
              "placement": {
                "3": 1,
                "2": 0,
                "1": 2
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 5
                  },
                  "place": 0
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 7
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 41,
            "earnings": 36870000,
            "placement": {
              "3": 7,
              "2": 4,
              "1": 4
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 5
                },
                "place": 0,
                "year": "2020"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 13,
                  "tenths": 7
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 6
                },
                "place": 5,
                "year": "2020"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 4
                },
                "place": 0,
                "year": "2019"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 6
                },
                "place": 4,
                "year": "2019"
              }
            ],
            "winPercentage": 975,
            "placePercentage": 3658,
            "earningsPerStart": 899268,
            "startPoints": 1520
          },
          "lastFiveStarts": {
            "averageOdds": 1142
          }
        },
        "pedigree": {
          "father": {
            "id": 667295,
            "name": "Ready Cash",
            "nationality": "FR"
          },
          "mother": {
            "id": 725928,
            "name": "Beau di Quattro",
            "nationality": "NL"
          },
          "grandfather": {
            "id": 562580,
            "name": "Love You",
            "nationality": "FR"
          }
        }
      },
      "driver": {
        "id": 67192,
        "firstName": "Örjan",
        "lastName": "Kihlström",
        "shortName": "Kih Ör",
        "location": "Bromma",
        "birth": 1962,
        "homeTrack": {
          "id": 5,
          "name": "Solvalla"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Turkos, vitt axelparti, 2-del ärm; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 1175,
              "earnings": 5678799800,
              "placement": {
                "3": 133,
                "2": 173,
                "1": 215
              },
              "winPercentage": 1829
            },
            "2020": {
              "starts": 782,
              "earnings": 3530445000,
              "placement": {
                "3": 97,
                "2": 92,
                "1": 166
              },
              "winPercentage": 2122
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 1000
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 9999,
          "maxOdds": 9999
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 951
        }
      }
    },
    {
      "number": 10,
      "postPosition": 10,
      "distance": 2640,
      "horse": {
        "id": 752429,
        "name": "Kinky Boots",
        "age": 4,
        "sex": "stallion",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 7
          }
        },
        "trainer": {
          "id": 174760,
          "firstName": "Jimmy",
          "lastName": "Nilsson",
          "shortName": "Nil Ji",
          "location": "Märsta",
          "birth": 1975,
          "homeTrack": {
            "id": 5,
            "name": "Solvalla"
          },
          "license": "B-tränare: träna, köra för bolag",
          "statistics": {
            "years": {
              "2019": {
                "starts": 8,
                "earnings": 18900000,
                "placement": {
                  "3": 1,
                  "2": 0,
                  "1": 4
                },
                "winPercentage": 5000
              },
              "2020": {
                "starts": 8,
                "earnings": 18400000,
                "placement": {
                  "3": 1,
                  "2": 0,
                  "1": 4
                },
                "winPercentage": 5000
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": true
          },
          "back": {
            "hasShoe": true,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": false
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 372000,
        "color": "mörkbrun",
        "homeTrack": {
          "id": 5,
          "name": "Solvalla"
        },
        "owner": {
          "id": 644728,
          "name": "Nilsson Jimmy & Sunnemark Dan"
        },
        "breeder": {
          "id": 644728,
          "name": "Nilsson Jimmy & Sunnemark Dan"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 7,
              "earnings": 18850000,
              "placement": {
                "3": 1,
                "2": 0,
                "1": 4
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 4
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 3
                  },
                  "place": 1
                }
              ]
            },
            "2020": {
              "starts": 7,
              "earnings": 18350000,
              "placement": {
                "3": 1,
                "2": 0,
                "1": 4
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 12,
                    "tenths": 3
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 7
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 14,
            "earnings": 37200000,
            "placement": {
              "3": 2,
              "2": 0,
              "1": 8
            },
            "records": [
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 12,
                  "tenths": 3
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 3
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 4
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 7
                },
                "place": 1,
                "year": "2020"
              }
            ],
            "winPercentage": 5714,
            "placePercentage": 7142,
            "earningsPerStart": 2657142,
            "startPoints": 2110
          },
          "lastFiveStarts": {
            "averageOdds": 724
          }
        },
        "pedigree": {
          "father": {
            "id": 705071,
            "name": "Brad de Veluwe",
            "nationality": "FI"
          },
          "mother": {
            "id": 613656,
            "name": "Enjoy de Luxe"
          },
          "grandfather": {
            "id": 195521,
            "name": "Enjoy Lavec"
          }
        }
      },
      "driver": {
        "id": 177032,
        "firstName": "Claes",
        "lastName": "Sjöström",
        "shortName": "Sjö Cl",
        "location": "Rimbo",
        "birth": 1976,
        "homeTrack": {
          "id": 5,
          "name": "Solvalla"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Röd/vit rutig, röd m blå revär; vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 525,
              "earnings": 622414700,
              "placement": {
                "3": 46,
                "2": 62,
                "1": 60
              },
              "winPercentage": 1142
            },
            "2020": {
              "starts": 299,
              "earnings": 351720000,
              "placement": {
                "3": 33,
                "2": 35,
                "1": 48
              },
              "winPercentage": 1605
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 1898
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 1272
        }
      }
    },
    {
      "number": 11,
      "postPosition": 11,
      "distance": 2640,
      "horse": {
        "id": 721432,
        "name": "Dollar Hornline",
        "age": 8,
        "sex": "gelding",
        "record": {
          "code": "M",
          "startMethod": "volte",
          "distance": "medium",
          "time": {
            "minutes": 1,
            "seconds": 14,
            "tenths": 4
          }
        },
        "trainer": {
          "id": 37325,
          "firstName": "Robert",
          "lastName": "Bergh",
          "shortName": "Ber Ro",
          "location": "Hajom",
          "birth": 1968,
          "homeTrack": {
            "id": 6,
            "name": "Åby"
          },
          "license": "A-tränare: träna, köra",
          "statistics": {
            "years": {
              "2019": {
                "starts": 1195,
                "earnings": 3389180900,
                "placement": {
                  "3": 108,
                  "2": 157,
                  "1": 231
                },
                "winPercentage": 1933
              },
              "2020": {
                "starts": 709,
                "earnings": 1224632400,
                "placement": {
                  "3": 59,
                  "2": 74,
                  "1": 127
                },
                "winPercentage": 1791
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": false
          },
          "back": {
            "hasShoe": false,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "HY",
            "text": "Hybrid",
            "engText": "Hybrid",
            "changed": false
          },
          "colour": {
            "code": "GR",
            "text": "Grön",
            "engText": "Green",
            "changed": false
          }
        },
        "money": 289800,
        "color": "brun",
        "homeTrack": {
          "id": 6,
          "name": "Åby"
        },
        "owner": {
          "id": 791280,
          "name": "Joakim Claesson AB & Lindberg Therese"
        },
        "breeder": {
          "id": 77917,
          "name": "AB Hornline",
          "location": "Västervik"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 8,
              "earnings": 9900000,
              "placement": {
                "3": 0,
                "2": 2,
                "1": 3
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 8
                  },
                  "place": 1
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 1
                  },
                  "place": 2
                }
              ]
            },
            "2020": {
              "starts": 8,
              "earnings": 3260000,
              "placement": {
                "3": 1,
                "2": 0,
                "1": 2
              },
              "records": [
                {
                  "code": "aM",
                  "startMethod": "auto",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 0
                  },
                  "place": 3
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 4
                  },
                  "place": 1
                }
              ]
            }
          },
          "life": {
            "starts": 50,
            "earnings": 28980000,
            "placement": {
              "3": 4,
              "2": 6,
              "1": 8
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 9
                },
                "place": 5,
                "year": "2017"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 0
                },
                "place": 3,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 4
                },
                "place": 1,
                "year": "2019"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 18,
                  "tenths": 2
                },
                "place": 0,
                "year": "2020"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 14,
                  "tenths": 4
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "K",
                "startMethod": "volte",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 21,
                  "tenths": 0
                },
                "place": 0,
                "year": "2014"
              }
            ],
            "winPercentage": 1600,
            "placePercentage": 3600,
            "earningsPerStart": 579600,
            "startPoints": 995
          },
          "lastFiveStarts": {
            "averageOdds": 969
          }
        },
        "pedigree": {
          "father": {
            "id": 667295,
            "name": "Ready Cash",
            "nationality": "FR"
          },
          "mother": {
            "id": 601208,
            "name": "Windsong Angelica",
            "nationality": "US"
          },
          "grandfather": {
            "id": 501081,
            "name": "Angus Hall",
            "nationality": "US"
          }
        }
      },
      "driver": {
        "id": 64261,
        "firstName": "Ulf",
        "lastName": "Eriksson",
        "shortName": "Eri Ul",
        "location": "Bollnäs",
        "birth": 1964,
        "homeTrack": {
          "id": 12,
          "name": "Bollnäs"
        },
        "license": "A-tränare: träna, köra",
        "silks": "Röd, m.blå axp., lod.fält och ärmrev.;vit",
        "statistics": {
          "years": {
            "2019": {
              "starts": 819,
              "earnings": 987985000,
              "placement": {
                "3": 76,
                "2": 63,
                "1": 91
              },
              "winPercentage": 1111
            },
            "2020": {
              "starts": 301,
              "earnings": 479493800,
              "placement": {
                "3": 28,
                "2": 34,
                "1": 41
              },
              "winPercentage": 1362
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 9999
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 3696
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 71
        }
      }
    },
    {
      "number": 12,
      "postPosition": 12,
      "distance": 2640,
      "horse": {
        "id": 729354,
        "name": "Volcan d'Inverne",
        "age": 7,
        "sex": "gelding",
        "record": {
          "code": "K",
          "startMethod": "volte",
          "distance": "short",
          "time": {
            "minutes": 1,
            "seconds": 15,
            "tenths": 0
          }
        },
        "trainer": {
          "id": 63820,
          "firstName": "Bo",
          "lastName": "Jernkvist",
          "shortName": "Jer Bo",
          "location": "Österfärnebo",
          "birth": 1948,
          "homeTrack": {
            "id": 16,
            "name": "Gävle"
          },
          "license": "B-tränare: träna, köra för bolag",
          "statistics": {
            "years": {
              "2019": {
                "starts": 18,
                "earnings": 11670000,
                "placement": {
                  "3": 2,
                  "2": 1,
                  "1": 3
                },
                "winPercentage": 1666
              },
              "2020": {
                "starts": 20,
                "earnings": 13250000,
                "placement": {
                  "3": 2,
                  "2": 3,
                  "1": 3
                },
                "winPercentage": 1500
              }
            }
          }
        },
        "shoes": {
          "reported": true,
          "front": {
            "hasShoe": true,
            "changed": false
          },
          "back": {
            "hasShoe": true,
            "changed": false
          }
        },
        "sulky": {
          "reported": true,
          "type": {
            "code": "VA",
            "text": "Vanlig",
            "engText": "Standard",
            "changed": false
          },
          "colour": {
            "code": "GU",
            "text": "Gul",
            "engText": "Yellow",
            "changed": false
          }
        },
        "money": 373300,
        "color": "brun",
        "homeTrack": {
          "id": 16,
          "name": "Gävle"
        },
        "owner": {
          "id": 726690,
          "name": "Jernkvist Anders",
          "location": "Berit & Andreas"
        },
        "breeder": {
          "id": 464456,
          "name": "Bard Alexander & Bermsjö Ulrich"
        },
        "statistics": {
          "years": {
            "2019": {
              "starts": 18,
              "earnings": 11670000,
              "placement": {
                "3": 2,
                "2": 1,
                "1": 3
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 14,
                    "tenths": 0
                  },
                  "place": 5
                },
                {
                  "code": "M",
                  "startMethod": "volte",
                  "distance": "medium",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 3
                  },
                  "place": 4
                }
              ]
            },
            "2020": {
              "starts": 17,
              "earnings": 12340000,
              "placement": {
                "3": 2,
                "2": 2,
                "1": 3
              },
              "records": [
                {
                  "code": "aK",
                  "startMethod": "auto",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 13,
                    "tenths": 6
                  },
                  "place": 6
                },
                {
                  "code": "K",
                  "startMethod": "volte",
                  "distance": "short",
                  "time": {
                    "minutes": 1,
                    "seconds": 15,
                    "tenths": 0
                  },
                  "place": 3
                }
              ]
            }
          },
          "life": {
            "starts": 61,
            "earnings": 37330000,
            "placement": {
              "3": 6,
              "2": 5,
              "1": 10
            },
            "records": [
              {
                "code": "aK",
                "startMethod": "auto",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 13,
                  "tenths": 6
                },
                "place": 6,
                "year": "2020"
              },
              {
                "code": "aM",
                "startMethod": "auto",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 1
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "aL",
                "startMethod": "auto",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 18,
                  "tenths": 1
                },
                "place": 0,
                "year": "2018"
              },
              {
                "code": "L",
                "startMethod": "volte",
                "distance": "long",
                "time": {
                  "minutes": 1,
                  "seconds": 16,
                  "tenths": 7
                },
                "place": 2,
                "year": "2019"
              },
              {
                "code": "M",
                "startMethod": "volte",
                "distance": "medium",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 1
                },
                "place": 1,
                "year": "2020"
              },
              {
                "code": "K",
                "startMethod": "volte",
                "distance": "short",
                "time": {
                  "minutes": 1,
                  "seconds": 15,
                  "tenths": 0
                },
                "place": 3,
                "year": "2020"
              }
            ],
            "winPercentage": 1639,
            "placePercentage": 3442,
            "earningsPerStart": 611967,
            "startPoints": 1055
          },
          "lastFiveStarts": {
            "averageOdds": 1405
          }
        },
        "pedigree": {
          "father": {
            "id": 484805,
            "name": "Scarlet Knight",
            "nationality": "US"
          },
          "mother": {
            "id": 614650,
            "name": "Vitesse d'Inverne"
          },
          "grandfather": {
            "id": 530240,
            "name": "Kiss Francais",
            "nationality": "FR"
          }
        }
      },
      "driver": {
        "id": 657235,
        "firstName": "Emilia",
        "lastName": "Leo",
        "shortName": "Leo Em",
        "location": "Borlänge",
        "birth": 1992,
        "homeTrack": {
          "id": 23,
          "name": "Romme"
        },
        "license": "B-tränare: träna, köra, rida",
        "silks": "Svart, grå sidor och svarta staplar; grå",
        "statistics": {
          "years": {
            "2019": {
              "starts": 701,
              "earnings": 913260000,
              "placement": {
                "3": 62,
                "2": 80,
                "1": 118
              },
              "winPercentage": 1683
            },
            "2020": {
              "starts": 525,
              "earnings": 546900300,
              "placement": {
                "3": 50,
                "2": 44,
                "1": 74
              },
              "winPercentage": 1409
            }
          }
        }
      },
      "pools": {
        "vinnare": {
          "@type": ".VinnareStartPool",
          "odds": 4003
        },
        "plats": {
          "@type": ".PlatsStartPool",
          "minOdds": 100,
          "maxOdds": 371
        },
        "V75": {
          "@type": ".MarkingBetStartPool",
          "betDistribution": 97
        }
      }
    }
  ]
};

export default Race;
