import * as React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import {ReactNode} from "react";

const { Content, Header, Sider } = AntLayout;

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) =>
    <AntLayout style={{ minHeight: '100vh' }}>
        <Sider>
            <Menu>

            </Menu>
        </Sider>
        <AntLayout>
            <Header style={{background: '#fff', padding: 0 }} />

            <Content
                style={{
                    margin: '34px 26px',
                    padding: 24,
                    minHeight: 280,

                }}
            >
                { children }
            </Content>
        </AntLayout>
    </AntLayout>;

export default Layout;