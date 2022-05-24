gdjs.Level_321Code = {};
gdjs.Level_321Code.GDMindyObjects1= [];
gdjs.Level_321Code.GDMindyObjects2= [];
gdjs.Level_321Code.GDMindyObjects3= [];
gdjs.Level_321Code.GDMindyObjects4= [];
gdjs.Level_321Code.GDBatObjects1= [];
gdjs.Level_321Code.GDBatObjects2= [];
gdjs.Level_321Code.GDBatObjects3= [];
gdjs.Level_321Code.GDBatObjects4= [];
gdjs.Level_321Code.GDTopBlockObjects1= [];
gdjs.Level_321Code.GDTopBlockObjects2= [];
gdjs.Level_321Code.GDTopBlockObjects3= [];
gdjs.Level_321Code.GDTopBlockObjects4= [];
gdjs.Level_321Code.GDBlockGrassObjects1= [];
gdjs.Level_321Code.GDBlockGrassObjects2= [];
gdjs.Level_321Code.GDBlockGrassObjects3= [];
gdjs.Level_321Code.GDBlockGrassObjects4= [];
gdjs.Level_321Code.GDBlockObjects1= [];
gdjs.Level_321Code.GDBlockObjects2= [];
gdjs.Level_321Code.GDBlockObjects3= [];
gdjs.Level_321Code.GDBlockObjects4= [];
gdjs.Level_321Code.GDBridgeObjects1= [];
gdjs.Level_321Code.GDBridgeObjects2= [];
gdjs.Level_321Code.GDBridgeObjects3= [];
gdjs.Level_321Code.GDBridgeObjects4= [];
gdjs.Level_321Code.GDFloorGrassObjects1= [];
gdjs.Level_321Code.GDFloorGrassObjects2= [];
gdjs.Level_321Code.GDFloorGrassObjects3= [];
gdjs.Level_321Code.GDFloorGrassObjects4= [];
gdjs.Level_321Code.GDFloorObjects1= [];
gdjs.Level_321Code.GDFloorObjects2= [];
gdjs.Level_321Code.GDFloorObjects3= [];
gdjs.Level_321Code.GDFloorObjects4= [];
gdjs.Level_321Code.GDTreeObjects1= [];
gdjs.Level_321Code.GDTreeObjects2= [];
gdjs.Level_321Code.GDTreeObjects3= [];
gdjs.Level_321Code.GDTreeObjects4= [];
gdjs.Level_321Code.GDRockObjects1= [];
gdjs.Level_321Code.GDRockObjects2= [];
gdjs.Level_321Code.GDRockObjects3= [];
gdjs.Level_321Code.GDRockObjects4= [];
gdjs.Level_321Code.GDWoodSignObjects1= [];
gdjs.Level_321Code.GDWoodSignObjects2= [];
gdjs.Level_321Code.GDWoodSignObjects3= [];
gdjs.Level_321Code.GDWoodSignObjects4= [];
gdjs.Level_321Code.GDSmallObstacleObjects1= [];
gdjs.Level_321Code.GDSmallObstacleObjects2= [];
gdjs.Level_321Code.GDSmallObstacleObjects3= [];
gdjs.Level_321Code.GDSmallObstacleObjects4= [];
gdjs.Level_321Code.GDTileRowObstacleObjects1= [];
gdjs.Level_321Code.GDTileRowObstacleObjects2= [];
gdjs.Level_321Code.GDTileRowObstacleObjects3= [];
gdjs.Level_321Code.GDTileRowObstacleObjects4= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects1= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects2= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects3= [];
gdjs.Level_321Code.GDTileColumnObstacleObjects4= [];
gdjs.Level_321Code.GDTileObstacleObjects1= [];
gdjs.Level_321Code.GDTileObstacleObjects2= [];
gdjs.Level_321Code.GDTileObstacleObjects3= [];
gdjs.Level_321Code.GDTileObstacleObjects4= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};
gdjs.Level_321Code.conditionTrue_1 = {val:false};
gdjs.Level_321Code.condition0IsTrue_1 = {val:false};
gdjs.Level_321Code.condition1IsTrue_1 = {val:false};
gdjs.Level_321Code.condition2IsTrue_1 = {val:false};


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) < (( gdjs.Level_321Code.GDMindyObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects3[0].getPointY("")) - 15;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects3[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseY(runtimeScene, "", 0) > (( gdjs.Level_321Code.GDMindyObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects3[0].getPointY("")) + 15;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects3);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < (( gdjs.Level_321Code.GDMindyObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects3[0].getPointX("")) - 15;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects3 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > (( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointX("")) + 15;
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMindyObjects2[k] = gdjs.Level_321Code.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMindyObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].setAnimation(1 + gdjs.evtTools.common.mod(Math.round(((gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").getAngle())) / 45 + 1), 8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMindyObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMindyObjects2[k] = gdjs.Level_321Code.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMindyObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDMindyObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].setAnimation(0);
}
}}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "UP", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "DOWN", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "LEFT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "LEFT", "RIGHT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


};gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMindyObjects1.length !== 0 ? gdjs.Level_321Code.GDMindyObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMindyObjects1.length !== 0 ? gdjs.Level_321Code.GDMindyObjects1[0] : null), true, "Level1", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMindyObjects1.length !== 0 ? gdjs.Level_321Code.GDMindyObjects1[0] : null), true, "Level2", 0);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSmallObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileRowObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileColumnObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileObstacleObjects1Objects = Hashtable.newFrom({"SmallObstacle": gdjs.Level_321Code.GDSmallObstacleObjects1, "TileRowObstacle": gdjs.Level_321Code.GDTileRowObstacleObjects1, "TileColumnObstacle": gdjs.Level_321Code.GDTileColumnObstacleObjects1, "TileObstacle": gdjs.Level_321Code.GDTileObstacleObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMindyObjects1Objects = Hashtable.newFrom({"Mindy": gdjs.Level_321Code.GDMindyObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBatObjects1Objects = Hashtable.newFrom({"Bat": gdjs.Level_321Code.GDBatObjects1});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bat"), gdjs.Level_321Code.GDBatObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDMindyObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDBatObjects1Objects, 100, true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDBatObjects1 */
/* Reuse gdjs.Level_321Code.GDMindyObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDBatObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBatObjects1[i].addForceTowardPosition((( gdjs.Level_321Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects1[0].getPointX("origin")) - 40, (( gdjs.Level_321Code.GDMindyObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects1[0].getPointY("origin")) - 60, 150, 0);
}
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("FloorGrass"), gdjs.Level_321Code.GDFloorGrassObjects3);
gdjs.copyArray(gdjs.Level_321Code.GDMindyObjects2, gdjs.Level_321Code.GDMindyObjects3);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFloorGrassObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFloorGrassObjects3[i].isCollidingWithPoint((( gdjs.Level_321Code.GDMindyObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects3[0].getPointX("footcollis")), (( gdjs.Level_321Code.GDMindyObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects3[0].getPointY("footcollis"))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFloorGrassObjects3[k] = gdjs.Level_321Code.GDFloorGrassObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFloorGrassObjects3.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11785956);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "grass_light_steps.mp3", 1, true, 5, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.Level_321Code.GDFloorObjects2);
/* Reuse gdjs.Level_321Code.GDMindyObjects2 */

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDFloorObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDFloorObjects2[i].isCollidingWithPoint((( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointX("footcollis")), (( gdjs.Level_321Code.GDMindyObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDMindyObjects2[0].getPointY("footcollis"))) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDFloorObjects2[k] = gdjs.Level_321Code.GDFloorObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDFloorObjects2.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11786372);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects2);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMindyObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMindyObjects2[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMindyObjects2[k] = gdjs.Level_321Code.GDMindyObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMindyObjects2.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDMindyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321Code.GDMindyObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDMindyObjects1[k] = gdjs.Level_321Code.GDMindyObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMindyObjects1.length = k;}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_321Code.conditionTrue_1 = gdjs.Level_321Code.condition1IsTrue_0;
gdjs.Level_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11787988);
}
}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Obstacle");
}}

}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Mindy"), gdjs.Level_321Code.GDMindyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SmallObstacle"), gdjs.Level_321Code.GDSmallObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileColumnObstacle"), gdjs.Level_321Code.GDTileColumnObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileObstacle"), gdjs.Level_321Code.GDTileObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileRowObstacle"), gdjs.Level_321Code.GDTileRowObstacleObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMindyObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMindyObjects1[i].separateFromObjectsList(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSmallObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileRowObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileColumnObstacleObjects1ObjectsGDgdjs_46Level_95321Code_46GDTileObstacleObjects1Objects, false);
}
}}

}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMindyObjects1.length = 0;
gdjs.Level_321Code.GDMindyObjects2.length = 0;
gdjs.Level_321Code.GDMindyObjects3.length = 0;
gdjs.Level_321Code.GDMindyObjects4.length = 0;
gdjs.Level_321Code.GDBatObjects1.length = 0;
gdjs.Level_321Code.GDBatObjects2.length = 0;
gdjs.Level_321Code.GDBatObjects3.length = 0;
gdjs.Level_321Code.GDBatObjects4.length = 0;
gdjs.Level_321Code.GDTopBlockObjects1.length = 0;
gdjs.Level_321Code.GDTopBlockObjects2.length = 0;
gdjs.Level_321Code.GDTopBlockObjects3.length = 0;
gdjs.Level_321Code.GDTopBlockObjects4.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects1.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects2.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects3.length = 0;
gdjs.Level_321Code.GDBlockGrassObjects4.length = 0;
gdjs.Level_321Code.GDBlockObjects1.length = 0;
gdjs.Level_321Code.GDBlockObjects2.length = 0;
gdjs.Level_321Code.GDBlockObjects3.length = 0;
gdjs.Level_321Code.GDBlockObjects4.length = 0;
gdjs.Level_321Code.GDBridgeObjects1.length = 0;
gdjs.Level_321Code.GDBridgeObjects2.length = 0;
gdjs.Level_321Code.GDBridgeObjects3.length = 0;
gdjs.Level_321Code.GDBridgeObjects4.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects1.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects2.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects3.length = 0;
gdjs.Level_321Code.GDFloorGrassObjects4.length = 0;
gdjs.Level_321Code.GDFloorObjects1.length = 0;
gdjs.Level_321Code.GDFloorObjects2.length = 0;
gdjs.Level_321Code.GDFloorObjects3.length = 0;
gdjs.Level_321Code.GDFloorObjects4.length = 0;
gdjs.Level_321Code.GDTreeObjects1.length = 0;
gdjs.Level_321Code.GDTreeObjects2.length = 0;
gdjs.Level_321Code.GDTreeObjects3.length = 0;
gdjs.Level_321Code.GDTreeObjects4.length = 0;
gdjs.Level_321Code.GDRockObjects1.length = 0;
gdjs.Level_321Code.GDRockObjects2.length = 0;
gdjs.Level_321Code.GDRockObjects3.length = 0;
gdjs.Level_321Code.GDRockObjects4.length = 0;
gdjs.Level_321Code.GDWoodSignObjects1.length = 0;
gdjs.Level_321Code.GDWoodSignObjects2.length = 0;
gdjs.Level_321Code.GDWoodSignObjects3.length = 0;
gdjs.Level_321Code.GDWoodSignObjects4.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects1.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects2.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects3.length = 0;
gdjs.Level_321Code.GDSmallObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileRowObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileColumnObstacleObjects4.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects1.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects2.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects3.length = 0;
gdjs.Level_321Code.GDTileObstacleObjects4.length = 0;

gdjs.Level_321Code.eventsList6(runtimeScene);
return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
