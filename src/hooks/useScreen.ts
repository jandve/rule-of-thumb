import { useEffect, useState } from "react";
import {
  DeviceTypeEnum,
  IS_DESKTOP,
  IS_TABLET,
} from "../constants/appConstants";

const useScreen = () => {
  const [deviceType, setDeviceType] = useState<DeviceTypeEnum>(
    DeviceTypeEnum.desktop
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      console.log(width);
      if (width < IS_TABLET) {
        setDeviceType(DeviceTypeEnum.mobil);
      } else if (width >= IS_TABLET && width < IS_DESKTOP) {
        setDeviceType(DeviceTypeEnum.tablet);
      } else {
        setDeviceType(DeviceTypeEnum.desktop);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { deviceType };
};

export default useScreen;
