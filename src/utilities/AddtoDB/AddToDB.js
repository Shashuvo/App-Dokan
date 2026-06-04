import { toast } from "react-toastify";

const getInstalledApps = () => {
    const installedAppsSTR = localStorage.getItem("installed");
    if (installedAppsSTR) {
        const installedAppsData = JSON.parse(installedAppsSTR);
        return installedAppsData;
    }
    else {
        return [];
    }
};

const addToInstalledApps = (id) => {
    const installedAppsData = getInstalledApps();
    if (installedAppsData.includes(id)) {
        toast.warning("You already have installed this app.");
        return false;
    }
    else {
        installedAppsData.push(id);
        const setInstalledData = JSON.stringify(installedAppsData);
        localStorage.setItem("installed", setInstalledData);
        return true;
    }
};

const removeFromDB = (id) => {
    const installedAppsData = getInstalledApps();
    const updatedInstalledData = installedAppsData.filter((installedID) => installedID !== id);
    localStorage.setItem("installed", JSON.stringify(updatedInstalledData));
};

export { addToInstalledApps, getInstalledApps, removeFromDB };