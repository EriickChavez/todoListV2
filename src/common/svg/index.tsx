import React, { Component } from 'react'
import { Pressable } from 'react-native';
import { colors } from "../colors";

import IconBookOpen from "./book-open";
import IconCalendar from "./calendar";
import IconCheckSquare from "./check-square";
import IconChevronLeft from "./chevron-left";
import IconChevronRight from "./chevron-right";
import IconClock from "./clock";
import IconEdit2 from "./edit-2";
import IconEyeOff from "./eye-off";
import IconFilter from "./filter";
import IconImage from "./image";
import IconLogOut from "./log-out";
import IconMenu from "./menu";
import IconMessageSquare from "./message-square";
import IconPlusCircle from "./plus-circle";
import IconPlusSquare from "./plus-square";
import IconSearch from "./search";
import IconSettings from "./settings";
import IconStar from "./star";
import IconStar1 from "./star-1";
import IconTrash2 from "./trash-2";
import IconDashboard from "./dashboard";
import IconPlus from "./plus";
import IconWarning from "./warning";
import IconClose from "./close";
import IconUnknown from "./unknown";
import IconThreePoints from "./three-points";


export type nameIcon = "book-open"
| "calendar"
| "check-square"
| "chevron-left"
| "chevron-right"
| "clock"
| "edit-2"
| "eye-off"
| "filter"
| "image"
| "log-out"
| "menu"
| "message-square"
| "plus-circle"
| "plus-square"
| "search"
| "settings"
| "star"
| "star-1"
| "trash-2"
| "dashboard"
| "plus"
| "warning"
| "close"
| "unknown"
| "three-points"
| string
| undefined

export interface Props {
    name?: nameIcon,
    size?: Number,
    color?: string,
    style?: Object,
    button?: boolean,
    onPress?: Function
}

const Icon: React.FC<Props> = (props:Props) => {
    const {
        name,
        size,
        color = colors.GRAY,
        style = {},
        button = false,
        onPress = () => {},
    } = props;
    
    if (!name) {
        return null;
    }

    const Container = ({ children }) => {
        return !button
            ? <>{children}</>
            : <Pressable onPress={onPress}>{children}</Pressable>
    }

    let IconType:any = null;
    switch (name.toLowerCase()) {
        case "book-open":
            IconType = (
                <IconBookOpen style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "calendar":
            IconType = (
                <IconCalendar style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "check-square":
            IconType = (
                <IconCheckSquare style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "chevron-left":
            IconType = (
                <IconChevronRight style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "chevron-right":
            IconType = (
                <IconChevronLeft style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "clock":
            IconType = (
                <IconClock style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "edit-2":
            IconType = (
                <IconEdit2 style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "eye-off":
            IconType = (
                <IconEyeOff style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "filter":
            IconType = (
                <IconFilter style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "image":
            IconType = (
                <IconImage style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "log-out":
            IconType = (
                <IconLogOut style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "menu":
            IconType = (
                <IconMenu style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "message-square":
            IconType = (
                <IconMessageSquare style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "plus-circle":
            IconType = (
                <IconPlusCircle style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "plus-square":
            IconType = (
                <IconPlusSquare style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "search":
            IconType = (
                <IconSearch style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "settings":
            IconType = (
                <IconSettings style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "star":
            IconType = (
                <IconStar style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "star-1":
            IconType = (
                <IconStar1 style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "trash-2":
            IconType = (
                <IconTrash2 style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "dashboard":
            IconType = (
                <IconDashboard style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "plus":
            IconType = (
                <IconPlus style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "warning":
            IconType = (
                <IconWarning style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "close":
            IconType = (
                <IconClose style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        case "three-points":
            IconType = (
                <IconThreePoints style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
        default:
            IconType = (
                <IconUnknown style={style} width={size} height={size} stroke={color} {...props} />
            )
            break;
    }
    return (
        <Container>
            {IconType}
        </Container>
    )
}

export default Icon;


export {
    IconBookOpen,
    IconCalendar,
    IconCheckSquare,
    IconChevronLeft,
    IconChevronRight,
    IconClock,
    IconEdit2,
    IconEyeOff,
    IconFilter,
    IconImage,
    IconLogOut,
    IconMenu,
    IconMessageSquare,
    IconPlusCircle,
    IconPlusSquare,
    IconSearch,
    IconSettings,
    IconStar,
    IconStar1,
    IconTrash2,
}