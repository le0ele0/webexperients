    const baseLayout={
    template:`
    <div style ="border:1px solid black; height:50px; width:100%">
    <slot name = "up"></slot>
    </div>



    <div style = "border:1px solid black; height:calc(100%-50px); width:100%">
        <div style ="border: 1px solid black;float:left;height:100%;box-sizing:border-box; width:20%;">
        <slot name = "down-left"></slot>
        </div>

        <div style = "border: 1px solid black;float:left;height:100%;box-sizing:border-box; width:60%; overflow:auto;">
        <slot name = "down-main"></slot>
        </div>

        <div style = "border: 1px solid black;float:left;height:100%;box-sizing:border-box; width:20%;">
        <slot name = "down-right"></slot>
        </div>

    </div>
    `
  }