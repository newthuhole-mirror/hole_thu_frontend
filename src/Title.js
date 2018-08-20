import React, {Component} from 'react';
import './Title.css';

export function Title(props) {
    return (
        <div className="title">
            <div className="title-links">
                <a onClick={()=>{props.callback(
                    '关于 P大树洞（非官方） 网页版',
                    <div>
                        <p>使用提示：</p>
                        <ul>
                            <li>为保证使用体验，请使用分辨率恰好为 1920*1080 像素的电脑，并用 Chrome 浏览器 stable 分支最新版</li>
                            <li>在列表中点击帖子可以显示全部回复</li>
                            <li>搜索帖子功能正在开发中</li>
                        </ul>
                        <br />
                        <p>使用本网站时，您需要了解并同意：</p>
                        <ul>
                            <li>所有数据来自 PKU Helper，本站不对其内容负责</li>
                            <li>不接受关于修改 UI 的建议</li>
                            <li>英梨梨是我的，你们都不要抢</li>
                        </ul>
                    </div>
                )}}>Help</a>
                <a href="https://github.com/xmcp/ashole" target="_blank">GitHub</a>
            </div>
            P大树洞（非官方）
        </div>
    )
}