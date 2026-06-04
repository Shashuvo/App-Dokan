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

const addToInstalledApps = (id, onUpdate) => {
    const installedAppsData = getInstalledApps();
    if (installedAppsData.map(String).includes(String(id))) {
        toast.warning("You already have installed this app.");
        return false;
    } else {
        installedAppsData.push(id);
        localStorage.setItem("installed", JSON.stringify(installedAppsData));
        onUpdate?.(prev => [...prev, id]);
        return true;
    }
};

const removeFromDB = (id, onUpdate) => {
    const installedAppsData = getInstalledApps();
    const updated = installedAppsData.filter(installedID => String(installedID) !== String(id));
    localStorage.setItem("installed", JSON.stringify(updated));
    onUpdate?.(prev => prev.filter(installedID => String(installedID) !== String(id)));
};

export { addToInstalledApps, getInstalledApps, removeFromDB };