    const baseLayout={
    template:`
    <div style ="border:1px solid black; height:50px; width:100%">
    手动阀
    <slot name = "up"></slot>
    </div>
    <div style = "border:1px solid black; height:auto; width:100%">
        <div class = "float-left" style ="width:20%;">
        <slot name = "down-left"></slot>
        </div>
        <div class = "float-left" style = "60%;">
        <slot name = "down-main"></slot>
        </div>
        <div class = "float-left" style = "20%;">
        <slot name = "down-right"></slot>
        </div>
    </div>
    `
  }