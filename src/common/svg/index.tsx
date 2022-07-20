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



export type Props = {
    name?: string,
    size?: Number,
    color?: string,
    style?: Object,
    button?: boolean,
    onPress?: () => null
}

const Icon: React.FC<Props> = ({
    name,
    size,
    color = colors.GRAY,
    style = {},
    button = false,
    onPress = () => null,
}) => {
    if (!name) {
        return null;
    }

    const Container = ({ children }) => {
        return !button
            ? <>{children}</>
            : <Pressable onPress={onPress}>{children}</Pressable>
    }

    let IconType = null;
    switch (name) {
        case "book-open":
            IconType = (
                <IconBookOpen style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "calendar":
            IconType = (
                <IconCalendar style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "check-square":
            IconType = (
                <IconCheckSquare style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "chevron-left":
            IconType = (
                <IconChevronRight style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "chevron-right":
            IconType = (
                <IconChevronLeft style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "clock":
            IconType = (
                <IconClock style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "edit-2":
            IconType = (
                <IconEdit2 style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "eye-off":
            IconType = (
                <IconEyeOff style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "filter":
            IconType = (
                <IconFilter style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "image":
            IconType = (
                <IconImage style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "log-out":
            IconType = (
                <IconLogOut style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "menu":
            IconType = (
                <IconMenu style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "message-square":
            IconType = (
                <IconMessageSquare style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "plus-circle":
            IconType = (
                <IconPlusCircle style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "plus-square":
            IconType = (
                <IconPlusSquare style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "search":
            IconType = (
                <IconSearch style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "settings":
            IconType = (
                <IconSettings style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "star":
            IconType = (
                <IconStar style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "star-1":
            IconType = (
                <IconStar1 style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "trash-2":
            IconType = (
                <IconTrash2 style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "dashboard":
            IconType = (
                <IconDashboard style={style} width={size} height={size} stroke={color} />
            )
            break;
        case "plus":
            IconType = (
                <IconPlus style={style} width={size} height={size} stroke={color} />
            )
            break;
        default:
            IconType = null;
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