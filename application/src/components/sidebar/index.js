import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarRoute, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="/NCFIservices" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Insights
                    </SidebarLink>
                    <SidebarLink to="/blog" onClick={toggle}>
                        Latest News
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}