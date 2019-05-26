
// 接口文件
const obj = {
    map: [3,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,1,1,3,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,1,1,3,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,0,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1], // 初始地图
    mapWidth: 26, // 地图宽度像素
    mapHeight: 7, // 地图高度像素
    task:[[0,2,3,0],[0,2,4,0],[0,2,5,0],[0,2,6,0],[0,2,7,0],[0,2,8,0],[0,2,9,0],[0,2,10,0],[0,2,14,0],[0,2,15,0],[0,2,16,0],[0,2,17,0],[0,2,18,0],[0,2,19,0],[0,2,20,0],[0,2,21,0],[0,3,3,0],[0,3,4,0],[0,3,5,0],[0,3,6,0],[0,3,7,0],[0,3,8,0],[0,4,3,0],[0,4,4,0],[0,4,5,0],[0,4,6,0],[0,4,7,0],[0,4,8,0],[1,0,3,0],[1,0,4,0],[1,0,5,0],[1,0,6,0],[1,0,7,0],[1,0,8,0],[1,0,9,0],[1,0,14,0],[1,0,15,0],[1,0,16,0],[1,0,17,0],[1,0,18,0],[1,0,19,0],[1,0,20,0],[1,0,21,0],[1,0,22,0],[1,6,3,0],[1,6,4,0],[1,6,5,0],[1,6,6,0],[1,6,7,0],[1,6,8,0],[1,6,9,0],[1,6,14,0],[1,6,15,0],[1,6,16,0],[1,6,17,0],[1,6,18,0],[1,6,19,0],[1,6,20,0],[1,6,21,0],[1,6,22,0],[2,0,3,0],[2,0,7,0],[2,0,11,0],[2,0,14,0],[2,0,17,0],[2,0,20,0],[2,0,23,0],[2,1,3,0],[2,1,7,0],[2,1,11,0],[2,1,14,0],[2,1,17,0],[2,1,20,0],[2,1,23,0],[2,2,3,0],[2,2,7,0],[2,2,11,0],[2,2,14,0],[2,2,17,0],[2,2,20,0],[2,2,23,0],[2,3,3,0],[2,3,7,0],[2,3,11,0],[2,3,14,0],[2,3,17,0],[2,3,20,0],[2,3,23,0],[2,4,3,0],[2,4,7,0],[2,4,11,0],[2,4,14,0],[2,4,17,0],[2,4,20,0],[2,4,23,0],[2,5,3,0],[2,5,7,0],[2,5,11,0],[2,5,14,0],[2,5,17,0],[2,5,20,0],[2,5,23,0],[2,6,3,0],[2,6,7,0],[2,6,11,0],[2,6,14,0],[2,6,17,0],[2,6,20,0],[2,6,23,0],[0,2,22,1],[0,2,23,1],[0,3,22,1],[0,3,23,1],[0,4,22,1],[0,4,23,1],[0,3,9,2],[0,3,14,2],[0,3,16,2],[0,3,18,2],[0,3,20,2],[1,1,3,2],[1,1,5,2],[1,1,7,2],[1,1,9,2],[1,4,3,2],[1,4,5,2],[1,4,7,2],[1,4,9,2],[2,1,15,2],[2,1,18,2],[2,1,21,2],[2,4,15,2],[2,4,18,2],[2,4,21,2],[1,1,15,3],[1,1,17,3],[1,1,19,3],[1,1,21,3],[1,4,15,3],[1,4,17,3],[1,4,19,3],[1,4,21,3],[2,0,4,4],[2,0,8,4],[2,4,4,4],[2,4,8,4]],
    // route: [[3, [0, 0, 0], [0, 0, 0], [0, 2, 0], [0, 2, 0], [0, 4, 0], [0, 4, 0], [0, 6, 0], [0, 6, 0], [0, 6, 2], [0, 6, 2]]
    //     , [2, [0, 5, 15], [0, 5, 13], [0, 5, 11], [0, 5, 9], [0, 7, 9], [0, 7, 11], [0, 7, 13], [0, 7, 15], [0, 7, 17], [0, 9, 17]],
    // [8, [0, 0, 40], [0, 4, 40], [0, 8, 40], [0, 12, 40], [0, 12, 36], [0, 16, 36], [0, 16, 32], [0, 12, 32], [0, 8, 32], [0, 4, 32]]],
    // ticks: 10,
};

// 货物种类版
const cargoColor = ['blue','skyblue','purple','orange','pink']
const cargoSize = [1,1,2,2,3]



$("#getMap").click(getMap);
const mapWidth = obj.mapWidth;
const mapHeight = obj.mapHeight;
const route = obj.route;
const colorPanel = ['black', 'lightgreen', 'red', 'yellow', 'orange']
let mapArr = []; // map数组 3 * width * height
let speed = 500; // 运动展示的速度



let map = document.getElementsByClassName('map');

// 绑定事件
$("#drawMap").click(drawMap);
$("#createRandom").click(createRandom);
$("#initCargo").click(initCargo);
$("#moveCargo").click(moveCargo);


/*
  * 绘制地图
  * desc: 根据mapArr数组 生成地图
  * arguments: no arguments 
*/
function drawMap() {
    if (mapArr.length == 0) {
        alert("请选择生成地图的方式！");
        return;
    }
    // 初始化地图
    $('.map').html("");
    // 根据mapArr绘制图形
    for (let table = 0; table < 3; table++) {
        map[table].style.gridTemplateColumns = 'repeat(' + mapWidth + ',1fr)';
        map[table].style.gridTemplateRows = 'repeat(' + mapHeight + ',1fr)';
        for (let i = 0; i < mapWidth * mapHeight; i++) {
            let li = document.createElement('li');
            li.setAttribute("table", table);
            li.setAttribute("pos", i);
            li.style.backgroundColor = colorPanel[mapArr[table][i]];
            map[table].appendChild(li);
        }
    }
}

/*
  * 后台获取MAP数据以及route数据
  * desc: 和后端的接口将写在这里 重新为obj里的数据赋值 覆盖掉假数据
  * arguments: no arguments
*/
function getMap(){
    // map数组(1*all)切片成mapArr(3*(width*height))
    for (let i = 0; i < 3; i++) {
        mapArr.push(obj.map.splice(0, mapWidth * mapHeight));
    }
    drawMap();
    initCargo();
}


/*
  * 随机生成地图
  * desc: 和"随机生成地图"按钮绑定 点击触发
  * arguments: isNamed是否指定数据,不指定将随机  named指定的值
*/
function createRandom(event, isNamed=false, named=1) {
    // 初始化数据
    obj['map'] = [];
    mapArr = [];
    // 制造假数据 3 * height * width 数据范围[0,1,2,3]
    // 如果isNamed为真 全部赋值named值
    for (let i = 0; i < 3 * mapHeight * mapWidth; i++) {
        obj['map'].push(isNamed ? named : parseInt(Math.random() * 4));
    }

    // map数组(1*all)切片成mapArr(3*(width*height))
    for (let i = 0; i < 3; i++) {
        mapArr.push(obj.map.splice(0, mapWidth * mapHeight));
    }
    // if (!isNamed) {
    //     $(".mapCode").stop().toggle().text(`MAP-CODE:[${mapArr}]`)
    // }
    drawMap();
}


/*
  * 初始化货物
  * desc:和初始化货物的按钮绑定，点击执行函数
*/
function initCargo() {
    if (mapArr.length === 0) {
        alert("需要先生成一个地图！");
        return;
    }

    const tasks = obj.task
    tasks.forEach(task=>{
        let size = cargoSize[task[3]],
        table = task[0],
        row = task[1],
        col = task[2],
        color = cargoColor[task[3]]
        drawCargo(size,table,row,col,color)
    })
}

/*
  * 货物轨迹绘制
  * desc: 货物运动按钮绑定
*/
function moveCargo() {
    if (mapArr.length === 0) {
        alert("需要先生成一个地图！");
        return;
    }
    let tick = 1;
    const timer = setInterval(function () {
        // 设置定时器
        // 清楚上一tick的所有画面
        if (tick != 1) {
            let lastTick = tick - 1;
            route.forEach(cargo => {
                // 当这一tick与上一tick发生变化时
                if (String(cargo[tick]) != String(cargo[lastTick])) {
                    drawCargo(cargo[0], cargo[lastTick][0], cargo[lastTick][1],cargo[lastTick][2],colorPanel[1],true);
                }
            })
        }

        // 绘制这一tick的画面
        route.forEach(cargo => {
            if(cargo[tick].length!=0)
            drawCargo(cargo[0], cargo[tick][0], cargo[tick][1],cargo[tick][2], colorPanel[4]);
        })
        tick++;
        if (tick > obj.ticks) {
            // tick 大于最终ticks 清楚定时器
            clearInterval(timer);
            console.log("END");
        }
    }, speed);
}
/*
  * 根据货物／地图建筑 的初始点(左上角坐标)绘制货物
  * desc: 根据货物／地图建筑 的初始点(左上角坐标)绘制货物
  * args: size货物大小 table地图编号[1,2,3] row,col坐标行列 color绘制颜色 isClear是否为清除的标志
*/
function drawCargo(size, table, row, col, color, isClear = false) {
    for (let i = row; i < row + size; i++) {
        for (let j = col; j < col + size; j++) {
            let pos = i * mapWidth + j;
            let object = $(`li[table='${table}'][pos='${pos}']`)
            let border = "1px solid white"
            object.css("backgroundColor", color).css("position", "relative")
            if(isClear === true){
                object.css("border",border)
            }else{
                object.css("border","none")
                if(i == row) object.css("borderTop",border)
                if(i == row + size-1) object.css("borderButtom",border)
                if(j == col) object.css("borderLeft",border)
                if(j == col + size -1) object.css("borderRight",border)
            }
        }
    }


}












