//Global Variables
const apiKey = "AIzaSyAlWD_gLmvHBji8ZX8OHNKrYQj_DrrDwVY";

//Latitude: 32.6579371, Longitude: -117.0210882
var address;
var latitude = 32.6579371;
var longitude = -117.0210882;
var solar_data;
var overlays = [];
var map;
var solar_layers;

//Colors
const binaryPalette = ["212121", "B3E5FC"];
const rainbowPalette = ["3949AB", "81D4FA", "66BB6A", "FFE082", "E53935"];
const ironPalette = ["00000A", "91009C", "E64616", "FEB400", "FFFFF6"];
const sunlightPalette = ["212121", "FFCA28"];

//GeoTiff Data Layers
const dataLayerOptions = [
  { id: "none", name: "No layer" },
  { id: "mask", name: "Roof mask" },
  { id: "dsm", name: "Digital Surface Model" }, 
  { id: "rgb", name: "Aerial image" }, 
  { id: "annualFlux", name: "Annual sunshine" },
  { id: "monthlyFlux", name: "Monthly sunshine" },
  { id: "hourlyShade", name: "Hourly shade" }, 
];

//Layer types
const layer_type = ["dsm", "rgb", "annualFlux", "monthlyFlux", "hourlyShade"];
var listenersAdded = false;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourNames = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

//DOM Objects
const selectedOverlayElement = document.getElementById("overlaySelect");
const selectedMonthElement = document.getElementById("monthSlider");
const selectedHourElement = document.getElementById("hourSlider");
const checkboxDisplayOverlays = document.getElementById("toggleAllOverlays");
const monthNameDisplay = document.getElementById("monthName");
const hourDisplay = document.getElementById("hourDisplay");
const addressInputElement = document.getElementById("property_address_input");
const element_modules_range = document.getElementById("system_modules_range");
const element_modules_range_display = document.getElementById("modules_range_display_qty");
const element_modules_range_watts = document.getElementById("system_modules_watts");
const element_modules_calculator_display = document.getElementById("modules_calculator_display");