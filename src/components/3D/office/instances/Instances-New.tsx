/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useMemo, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';
import { OfficeLibrary } from '../../../../assets/';

export const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/Office-Lib.glb');
  const instances = useMemo(
    () => ({
      Mirror: nodes.Mirror,
      BookBlue: nodes.Book_Blue,
      BookGreen: nodes.Book_Green,
      BookRed: nodes.Book_Red,
      BoxfileBlue: nodes.Boxfile_Blue,
      BoxfileBlueBundle: nodes.Boxfile_Blue_Bundle,
      BoxfileGreen: nodes.Boxfile_Green,
      BoxfileGreenBundle: nodes.Boxfile_Green_Bundle,
      BoxfileOrange: nodes.Boxfile_Orange,
      BoxfilePurple: nodes.Boxfile_Purple,
      BoxfileRed: nodes.Boxfile_Red,
      BoxfileYellow: nodes.Boxfile_Yellow,
      Broom: nodes.Broom,
      Calendar: nodes.Calendar,
      CarboardBox: nodes.CarboardBox_01,
      CarboardBox1: nodes.CarboardBox_02,
      CarboardBoxClose: nodes.CarboardBox_Close,
      CarboardBoxOpen: nodes.CarboardBox_Open,
      Ceiling: nodes.Ceiling,
      CeilingFan: nodes.Ceiling_Fan,
      CeilingFanBlade: nodes.CeilingFan_Blade,
      CeilingLight: nodes.Ceiling_Light_1,
      CeilingLight1: nodes.Ceiling_Light_2,
      Cellphone: nodes.Cellphone,
      ChairBlack: nodes.Chair_Black,
      ChairBlue: nodes.Chair_Blue,
      ChairOffWhite: nodes.Chair_OffWhite,
      ChairRed: nodes.Chair_Red,
      Clipboard: nodes.Clipboard,
      Clock: nodes.Clock,
      CoffeeCupGray: nodes.CoffeeCup_Gray,
      CoffeeCupOffWhite: nodes.CoffeeCup_OffWhite,
      Coffeetable: nodes.Coffeetable,
      CoffeetablePreset: nodes.Coffeetable_Preset,
      ComputerTower: nodes.ComputerTower,
      CouchGray: nodes.Couch_Gray,
      CouchGraySeat: nodes.Couch_Gray_Seat,
      CouchRed: nodes.Couch_Red,
      CouchRedSeat: nodes.Couch_Red_Seat,
      Cupboard: nodes.Cupboard,
      DeskGrayL: nodes.Desk_Gray_L,
      DeskGrayLPreset: nodes.Desk_Gray_L_Preset_01,
      DeskGrayLPreset1: nodes.Desk_Gray_L_Preset_02,
      DeskGrayLong: nodes.Desk_Gray_Long,
      DeskGrayLongPreset: nodes.Desk_Gray_Long_Preset_01,
      DeskGrayLongPreset1: nodes.Desk_Gray_Long_Preset_02,
      DeskWoodL: nodes.Desk_Wood_L,
      DeskWoodLPreset: nodes.Desk_Wood_L_Preset_01,
      DeskWoodLong: nodes.Desk_Wood_Long,
      DeskWoodLongPreset: nodes.Desk_Wood_Long_Preset_01,
      Deskfan: nodes.Deskfan,
      DeskfanBlade: nodes.Deskfan_Blade,
      Deskphone: nodes.Deskphone,
      ExitSign: nodes.ExitSign,
      FileBoxClosedBrown: nodes.FileBox_Closed_Brown,
      FileBoxGray: nodes.FileBox_Gray,
      FileCabinetShort: nodes.FileCabinet_Short,
      FileCabinetTall: nodes.FileCabinet_Tall,
      FireExtinguisher: nodes.FireExtinguisher,
      FloorCarpetGrey: nodes.Floor_Carpet_Grey,
      FloorTileLightGray: nodes.Floor_Tile_LightGray,
      FloorTileOffWhite: nodes.Floor_Tile_OffWhite,
      FloppydiskBlue: nodes.Floppydisk_Blue,
      FloppydiskBlueStack: nodes.Floppydisk_Blue_Stack,
      FloppydiskGreen: nodes.Floppydisk_Green,
      FloppydiskRed: nodes.Floppydisk_Red,
      KeyboardGray: nodes.Keyboard_Gray,
      KeyboardOffWhite: nodes.Keyboard_OffWhite,
      LampGray: nodes.Lamp_Gray,
      LampGreen: nodes.Lamp_Green,
      Laptop: nodes.Laptop,
      Lightswitch: nodes.Lightswitch,
      LockersGreen: nodes.Lockers_Green,
      Magazines: nodes.Magazines,
      MonitorCRT: nodes.Monitor_CRT,
      MonitorDouble: nodes.Monitor_Double,
      MonitorFlat: nodes.Monitor_Flat,
      MonitorFlatPostItNotes: nodes.Monitor_Flat_PostItNotes,
      MousepadBlue: nodes.Mousepad_Blue,
      MousepadGray: nodes.Mousepad_Gray,
      NotepadOrange: nodes.Notepad_Orange,
      NotepadWhite: nodes.Notepad_White,
      OverheadProjector: nodes.OverheadProjector,
      PapersFolder: nodes.Papers_Folder,
      PapersSpread: nodes.Papers_Spread,
      PapersStack: nodes.Papers_Stack,
      PapersStackColorful: nodes.Papers_Stack_Colorful,
      PaperTowelDispenser: nodes.PaperTowelDispenser,
      PaperTray: nodes.PaperTray,
      PaperTrayFull: nodes.PaperTray_Full,
      PaperTrayFullColorful: nodes.PaperTray_Full_Colorful,
      PaperTrayFullSticky: nodes.PaperTray_Full_Sticky,
      PenBlue: nodes.Pen_Blue,
      PenGray: nodes.Pen_Gray,
      PenGrayYellow: nodes.Pen_Gray_Yellow,
      PhotoDeskLandscape: nodes.Photo_Desk_Landscape,
      PhotoDeskPortrait: nodes.Photo_Desk_Portrait,
      Photocopier: nodes.Photocopier,
      Pinboard: nodes.Pinboard,
      PinboardPreset: nodes.Pinboard_Preset,
      Plant: nodes.Plant_01,
      Plant1: nodes.Plant_02,
      Plant2: nodes.Plant_03,
      Plant3: nodes.Plant_04,
      Plant4: nodes.Plant_05,
      PowerOutlet: nodes.Power_Outlet,
      PowerStrip: nodes.Power_Strip,
      Printer: nodes.Printer,
      RubixCube: nodes.RubixCube,
      Scanner: nodes.Scanner,
      SellotapeDispenserBlue: nodes.SellotapeDispenser_Blue,
      SellotapeDispenserGray: nodes.SellotapeDispenser_Gray,
      Shelf: nodes.Shelf,
      ShelfPreset: nodes.Shelf_Preset_01,
      ShelfPreset1: nodes.Shelf_Preset_02,
      Sinks: nodes.Sinks,
      Stapler: nodes.Stapler,
      SoapDispenser: nodes.SoapDispenser,
      LockersGray: nodes.Lockers_Gray,
      StickyNoteBlue: nodes.StickyNote_Blue,
      StickyNoteBlueStack: nodes.StickyNote_Blue_Stack,
      StickyNoteGreen: nodes.StickyNote_Green,
      StickyNoteGreenStack: nodes.StickyNote_Green_Stack,
      StickyNoteYellow: nodes.StickyNote_Yellow,
      StickyNoteYellowStack: nodes.StickyNote_Yellow_Stack,
      TableGray: nodes.Table_Gray,
      TableGrayPreset: nodes.Table_Gray_Preset_01,
      TableGrayPreset1: nodes.Table_Gray_Preset_02,
      TableGrayPreset2: nodes.Table_Gray_Preset_03,
      TableWood: nodes.Table_Wood,
      ToiletStall: nodes.ToiletStall,
      ToiletDoor: nodes.Toilet_Door,
      ToiletStallMultiple: nodes.ToiletStall_Multiple,
      ToiletDoor1: nodes.Toilet_Door_01,
      ToiletDoor2: nodes.Toilet_Door_04,
      ToiletDoor3: nodes.Toilet_Door_02,
      ToiletDoor4: nodes.Toilet_Door_03,
      TrachCanTopper: nodes.TrachCan_Topper,
      TrashCan: nodes.TrashCan,
      Urinal: nodes.Urinal,
      Wall: nodes.Wall_01,
      Wall1: nodes.Wall_02,
      WallCornerBlock: nodes.Wall_CornerBlock,
      WallDivider: nodes.Wall_Divider,
      WallDoor: nodes.Wall_Door_01,
      WallDoor1: nodes.Wall_Door_02,
      WallElevator: nodes.Wall_Elevator,
      WallElevatorDoor: nodes.Wall_Elevator_Door_01,
      WallElevatorDoor1: nodes.Wall_Elevator_Door_02,
      WallGlass: nodes.Wall_Glass,
      Glass: nodes.Glass,
      WallGlassBlinds: nodes.Wall_Glass_Blinds,
      WallGlassDoor: nodes.Wall_Glass_Door,
      GlassDoor: nodes.Glass_Door,
      WallWindow: nodes.Wall_Window,
      WallWindowBlinds: nodes.Wall_Window_Blinds,
      WaterCoolerGray: nodes.WaterCooler_Gray,
      WaterCoolerOffWhite: nodes.WaterCooler_OffWhite,
      Whiteboard: nodes.Whiteboard,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

/*
export function Model(props) {
  const instances = useContext(context);   
  return (
    <group  {...props} dispose={null}>
<instances.Mirror   />
<instances.BookBlue   />
<instances.BookGreen   />
<instances.BookRed   />
<instances.BoxfileBlue   />
<instances.BoxfileBlueBundle   />
<instances.BoxfileGreen   />
<instances.BoxfileGreenBundle   />
<instances.BoxfileOrange   />
<instances.BoxfilePurple   />
<instances.BoxfileRed   />
<instances.BoxfileYellow   />
<instances.Broom   />
<instances.Calendar   />
<instances.CarboardBox   />
<instances.CarboardBox1   />
<instances.CarboardBoxClose   />
<instances.CarboardBoxOpen   />
<instances.Ceiling   />
<instances.CeilingFan   >
<instances.CeilingFanBlade position={[0, 3.65, 0,]}   />
</mesh><instances.CeilingLight   />
<instances.CeilingLight1   />
<instances.Cellphone   />
<instances.ChairBlack   />
<instances.ChairBlue   />
<instances.ChairOffWhite   />
<instances.ChairRed   />
<instances.Clipboard   />
<instances.Clock   />
<instances.CoffeeCupGray   />
<instances.CoffeeCupOffWhite   />
<instances.Coffeetable   />
<instances.CoffeetablePreset   />
<instances.ComputerTower   />
<instances.CouchGray   />
<instances.CouchGraySeat   />
<instances.CouchRed   />
<instances.CouchRedSeat   />
<instances.Cupboard   />
<instances.DeskGrayL   />
<instances.DeskGrayLPreset   />
<instances.DeskGrayLPreset1   />
<instances.DeskGrayLong   />
<instances.DeskGrayLongPreset   />
<instances.DeskGrayLongPreset1   />
<instances.DeskWoodL   />
<instances.DeskWoodLPreset   />
<instances.DeskWoodLong   />
<instances.DeskWoodLongPreset   />
<instances.Deskfan   >
<instances.DeskfanBlade position={[0, 0.37, 0.1,]}   />
</instances.Deskfan >
<instances.Deskphone   />
<instances.ExitSign   />
<instances.FileBoxClosedBrown   />
<instances.FileBoxGray   />
<instances.FileCabinetShort   />
<instances.FileCabinetTall   />
<instances.FireExtinguisher   />
<instances.FloorCarpetGrey   />
<instances.FloorTileLightGray   />
<instances.FloorTileOffWhite   />
<instances.FloppydiskBlue   />
<instances.FloppydiskBlueStack   />
<instances.FloppydiskGreen   />
<instances.FloppydiskRed   />
<instances.KeyboardGray   />
<instances.KeyboardOffWhite   />
<instances.LampGray   />
<instances.LampGreen   />
<instances.Laptop   />
<instances.Lightswitch   />
<instances.LockersGreen   />
<instances.Magazines   />
<instances.MonitorCRT   />
<instances.MonitorDouble   />
<instances.MonitorFlat   />
<instances.MonitorFlatPostItNotes   />
<instances.MousepadBlue   />
<instances.MousepadGray   />
<instances.NotepadOrange   />
<instances.NotepadWhite   />
<instances.OverheadProjector   />
<instances.PapersFolder   />
<instances.PapersSpread   />
<instances.PapersStack   />
<instances.PapersStackColorful   />
<instances.PaperTowelDispenser   />
<instances.PaperTray   />
<instances.PaperTrayFull   />
<instances.PaperTrayFullColorful   />
<instances.PaperTrayFullSticky   />
<instances.PenBlue   />
<instances.PenGray   />
<instances.PenGrayYellow   />
<instances.PhotoDeskLandscape   />
<instances.PhotoDeskPortrait   />
<instances.Photocopier   />
<instances.Pinboard   />
<instances.PinboardPreset   />
<instances.Plant   />
<instances.Plant1   />
<instances.Plant2   />
<instances.Plant3   />
<instances.Plant4   />
<instances.PowerOutlet   />
<instances.PowerStrip   />
<instances.Printer   />
<instances.RubixCube   />
<instances.Scanner   />
<instances.SellotapeDispenserBlue   />
<instances.SellotapeDispenserGray   />
<instances.Shelf   />
<instances.ShelfPreset   />
<instances.ShelfPreset1   />
<instances.Sinks   />
<instances.Stapler   />
<instances.SoapDispenser   />
<instances.LockersGray   />
<instances.StickyNoteBlue   />
<instances.StickyNoteBlueStack   />
<instances.StickyNoteGreen   />
<instances.StickyNoteGreenStack   />
<instances.StickyNoteYellow   />
<instances.StickyNoteYellowStack   />
<instances.TableGray   />
<instances.TableGrayPreset   />
<instances.TableGrayPreset1   />
<instances.TableGrayPreset2   />
<instances.TableWood   />
<instances.ToiletStall   >
<instances.ToiletDoor position={[-1, 2.04, 1.71,]}   />
</mesh><instances.ToiletStallMultiple   >
<instances.ToiletDoor1 position={[-4.68, 2.04, 1.71,]}   />
<instances.ToiletDoor2 position={[2.61, 2.04, 1.71,]}   />
<instances.ToiletDoor3 position={[-2.24, 2.04, 1.71,]}   />
<instances.ToiletDoor4 position={[0.17, 2.04, 1.71,]}   />
</mesh><instances.TrachCanTopper   />
<instances.TrashCan   />
<instances.Urinal   />
<instances.Wall   />
<instances.Wall1   />
<instances.WallCornerBlock   />
<instances.WallDivider   />
<instances.WallDoor   />
<instances.WallDoor1   />
<instances.WallElevator   >
<instances.WallElevatorDoor position={[-2.5, 0, 0,]}   />
<instances.WallElevatorDoor1 position={[-2.5, 0, 0,]}   />
</mesh><instances.WallGlass   >
<instances.Glass position={[0.01, 0.38, 0,]}   />
</mesh><instances.WallGlassBlinds   />
<instances.WallGlassDoor   >
<instances.GlassDoor position={[0, 0.38, 0,]}   />
</mesh><instances.WallWindow   />
<instances.WallWindowBlinds   />
<instances.WaterCoolerGray   />
<instances.WaterCoolerOffWhite   />
<instances.Whiteboard   />

    </group>
  )
}
*/

useGLTF.preload('/Office-Lib.glb');
