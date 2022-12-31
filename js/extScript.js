
var tarf = [
  { tarf: "3", clock: "2022-12-12", mdrTotal: 13.19, tarfType: "other_uses" },
  { tarf: "5", clock: "2022-12-12", mdrTotal: 0, tarfType: "general" },
  { tarf: "1", clock: "2022-12-12", mdrTotal: 36.708, tarfType: "homemade" },
  { tarf: "1", clock: "2022-12-13", mdrTotal: 38.229, tarfType: "homemade" },
  { tarf: "5", clock: "2022-12-13", mdrTotal: 0, tarfType: "general" },
  { tarf: "3", clock: "2022-12-13", mdrTotal: 14.058, tarfType: "other_uses" },
  { tarf: "3", clock: "2022-12-14", mdrTotal: 9.681, tarfType: "other_uses" },
  { tarf: "1", clock: "2022-12-14", mdrTotal: 40.558, tarfType: "homemade" },
  { tarf: "5", clock: "2022-12-14", mdrTotal: 0, tarfType: "general" },
  { tarf: "5", clock: "2022-12-15", mdrTotal: 0, tarfType: "general" },
  { tarf: "1", clock: "2022-12-15", mdrTotal: 43.937, tarfType: "homemade" },
  { tarf: "3", clock: "2022-12-15", mdrTotal: 10.284, tarfType: "other_uses" }
];
console.log(
  "----------------------------------------------------------------------------------------------------------------------"
);
var test = tarf.filter((x) => x.clock == "2022-12-12");
var getClock = tarf.map((x) => x.clock);
console.log("test");
console.log(test);
console.log("getClock");
console.log(getClock);
if (tarf.some((x) => x.clock != "2022-12-16")) {
  console.log("exist");
} else {
  console.log("not exist");
}
