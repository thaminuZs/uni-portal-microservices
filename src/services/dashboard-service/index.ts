import { Elysia } from "elysia";

const app = new Elysia();

const PORT = process.env.PORT!;
const lecturerUrl = process.env.LECTURER_URL!;
const canteenUrl = process.env.CANTEEN_URL!;
const libraryUrl = process.env.LIBRARY_URL!;

const dashHeaders = {
  "x-user-id": "dash-service",
  "x-user-email": "dash@localmail.example",
  "x-user-role": "dash",
};

app.get("/", async (ctx) => {
  const lecturerRes = await (
    await fetch(lecturerUrl, {
      headers: dashHeaders,
    })
  ).json();

  const canteenRes = await (
    await fetch(canteenUrl, {
      headers: dashHeaders,
    })
  ).json();

  const libraryRes = await (
    await fetch(libraryUrl, {
      headers: dashHeaders,
    })
  ).json();

  const presentCount = lecturerRes.data.filter(
    (lecturer: any) => lecturer.status === "present",
  ).length;

  const presentQueue = canteenRes.data.filter(
    (canteen: any) => canteen.currentQueue === "high",
  ).length;

  const presentCrowd = libraryRes.data.filter(
    (library: any) => library.status === "full",
  ).length;

  if (!presentCount || !presentQueue || !presentCrowd) {
    return ctx.status(501, {
      success: false,
      message: "internal service error",
    });
  }

  return {
    success: true,
    data: {
      lecturersPresent: presentCount,
      crowdedCanteens: presentQueue,
      crowdedLibraries: presentCrowd,
    },
  };
});

app.listen(PORT, () => console.log("server on"));
