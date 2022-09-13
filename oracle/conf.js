export const contract_address = "";

export const contract_abi = [
  {
    members: [
      {
        name: "LocationKey",
        offset: 0,
        type: "felt",
      },
      {
        name: "Temperature_mC",
        offset: 1,
        type: "felt",
      },
      {
        name: "WeatherIcon",
        offset: 2,
        type: "felt",
      },
      {
        name: "Humidty",
        offset: 3,
        type: "felt",
      },
      {
        name: "WindDirection_deg",
        offset: 4,
        type: "felt",
      },
      {
        name: "WindSpeed_m_h",
        offset: 5,
        type: "felt",
      },
      {
        name: "CloudCover",
        offset: 6,
        type: "felt",
      },
      {
        name: "PrecipitationType",
        offset: 7,
        type: "felt",
      },
      {
        name: "Precip1hr_um",
        offset: 8,
        type: "felt",
      },
      {
        name: "Ceiling",
        offset: 9,
        type: "felt",
      },
      {
        name: "Visibility_m",
        offset: 10,
        type: "felt",
      },
    ],
    name: "Weather",
    size: 11,
    type: "struct",
  },
  {
    inputs: [
      {
        name: "account_address",
        type: "felt",
      },
      {
        name: "role",
        type: "felt",
      },
    ],
    name: "addAccountToRole",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "owner_address",
        type: "felt",
      },
    ],
    name: "constructor",
    outputs: [],
    type: "constructor",
  },
  {
    inputs: [
      {
        name: "weather",
        type: "Weather",
      },
    ],
    name: "set_weather",
    outputs: [],
    type: "function",
  },
  {
    inputs: [
      {
        name: "LocationKey",
        type: "felt",
      },
    ],
    name: "get_weather",
    outputs: [
      {
        name: "weather",
        type: "Weather",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];