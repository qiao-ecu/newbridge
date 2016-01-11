<!-- target: font -->
<ins id="nbwlFontIcon" class="nb-webim-light-toolbar-font">
    <ins id="nbwlFontContainer" class="nb-webim-light-font-container">
        <ins class="nb-webim-light-font-bar">
            <select id="nbwlFontFamily" class="nb-webim-light-font-family">
                <option value="宋体">宋体</option>
                <option value="arial,微软雅黑">微软雅黑</option>
                <option value="arial,楷体">楷体</option>
                <option value="arial,黑体">黑体</option>
                <option value="arial,隶书">隶书</option>
                <option value="Arial">Arial</option>
                <option value="Roman">Roman</option>
            </select>
            <select id="nbwlFontSize" class="nb-webim-light-font-size">
                <option value="8pt">8</option>
                <option value="10pt" selected>10</option>
                <option value="12pt">12</option>
                <option value="14pt">14</option>
                <option value="16pt">16</option>
                <option value="18pt">18</option>
                <option value="24pt">24</option>
            </select>
            <ins id="nbwlFontBold" class="nb-webim-light-font-bold" title="加粗">B</ins>
            <ins id="nbwlFontItalic" class="nb-webim-light-font-italic" title="斜体">I&nbsp;</ins>
            <ins id="nbwlFontUnderline" class="nb-webim-light-font-underline" title="下划线">U</ins>
            <ins id="nbwlFontColor" class="nb-webim-light-font-color" title="字体颜色">
                <ins id="nbwlColorContainer" class="nb-webim-light-color-container">
                    <ul>
                        #{colorItems}
                    </ul>
                    <div class="nb-webim-light-arrow">
                        <em></em>
                        <ins></ins>
                    </div>
                </ins>
            </ins>
        </ins>
    </ins>
</ins>

<!-- target: colorItem -->
<li class="nb-webim-light-color-item" style="border-color:#{color};">
    <ins style="background-color: #{color};" data-color="#{color}">
    </ins>
</li>
