//create a array of properties available to rent
export const properties = [
  {
    id: 1,
    name: "The White House",
    address: "1600 Pennsylvania Ave NW, Washington, DC 20500",
    rentPrice: "10000",
    description:
      "The White House is the official residence and principal workplace of the President of the United States. It is located at 1600 Pennsylvania Avenue NW in Washington, D.C. and has been the residence of every U.S. president since John Adams in 1800.",
    availability: [
      {
        startDate: "12-04-2022",
        endDate: "12-14-2022",
      },
    ],
    imageSrc:
      "https://pbs.twimg.com/profile_images/1351938473142448133/JQT93Cjo_400x400.jpg",
    imageAlt: "The White House",
    beds: 5,
    baths: 5,
    sqft: "6*10",

    location: "Washington DC",
    type: "House",
  },
  {
    id: 2,
    name: "Palm Harbor",
    address: "Palm Harbor, FL 34683",
    rentPrice: "1000",
    description:
      "Palm Harbor is a city in Pinellas County, Florida, United States. The population was 59,319 at the 2010 census. It is part of the Tampa–St. Petersburg–Clearwater Metropolitan Statistical Area.",
    availability: [
      {
        startDate: "12-17-2022",
        endDate: "12-27-2022",
      },
    ],
    imageSrc:
      "https://www.palmharbor.com/public/phhweb/gallery/userupload/2996058DF8A8833AF07131F7D95E4E3C/lalinda_1548876253080.jpg",
    imageAlt: "Palm Harbor",
    beds: 3,
    baths: 2,
    sqft: "3*10",

    location: "Florida",
    type: "Cabin",
  },
  {
    id: 3,
    name: "Beverly Hills",
    address: "Beverly Hills, CA 90210",
    rentPrice: "7000",
    description:
      "Beverly Hills is a city in Los Angeles County, California, United States, surrounded by the cities of Los Angeles and West Hollywood. The population was 34,109 at the 2010 census. BH is known for its large homes, its Rodeo Drive shopping district, and its celebrity residents.",
    availability: [
      {
        startDate: "12-05-2022",
        endDate: "12-29-2022",
      },
    ],
    imageSrc:
      "https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1253i215%2F28c63aa41bxx4pe5dr4harwpk2i215&option=N&h=472&permitphotoenlargement=false",
    imageAlt: "Beverly Hills",
    beds: 4,
    baths: 3,
    sqft: "4*10",
    pets: "Yes",

    location: "California",
    type: "Bungalow",
  },
  {
    id: 4,
    name: "Taj Mahal",
    address: "Agra, Uttar Pradesh 282001",
    rentPrice: "50000",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
    availability: [
      {
        startDate: "12-05-2022",
        endDate: "12-29-2022",
      },
    ],
    imageSrc:
      "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg",
    imageAlt: "Taj Mahal",
    beds: 5,
    baths: 5,
    sqft: "5*10",

    location: "Agra",
    type: "Mansion",
  },
  {
    id: 5,
    name: "Eiffel Tower",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    rentPrice: "4000",
    description:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
    availability: [
      {
        startDate: "12-13-2022",
        endDate: "12-29-2022",
      },
    ],
    imageSrc:
      "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
    imageAlt: "Eiffel Tower",
    beds: 5,
    baths: 5,
    sqft: "5*10",

    location: "Paris",
    type: "Mansion",
  },
];
