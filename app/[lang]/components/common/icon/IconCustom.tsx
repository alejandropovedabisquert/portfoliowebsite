import { IconKey, IconMap } from "./icon.config";

export default function IconCustom({
    size = 18,
    icon,
    color = "currentColor",
}:{
    size?: number;
    icon: IconKey;
    color?: string;
}) {
    const IconComponent = IconMap[icon];
    return <IconComponent size={size} color={color} />;
}