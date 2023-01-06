/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import { useMemo, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { OfficeLibrary } from '../../../../assets/';

export type GLTFResult = GLTF & {
  nodes: {
    Book_01: THREE.Mesh;
    Book_02: THREE.Mesh;
    Book_03: THREE.Mesh;
    Bookbox_01: THREE.Mesh;
    Bookbox_02: THREE.Mesh;
    Boxfile_01: THREE.Mesh;
    Boxfile_02: THREE.Mesh;
    Boxfile_03: THREE.Mesh;
    Boxfile_04: THREE.Mesh;
    Boxfile_05: THREE.Mesh;
    Boxfile_06: THREE.Mesh;
    Boxfile_07: THREE.Mesh;
    Boxfile_08: THREE.Mesh;
    Broom: THREE.Mesh;
    Calendar: THREE.Mesh;
    CarboardBox_01: THREE.Mesh;
    CarboardBox_02: THREE.Mesh;
    Ceiling: THREE.Mesh;
    CeilingFan: THREE.Mesh;
    CeilingFan_Blade: THREE.Mesh;
    Mesh020: THREE.Mesh;
    Mesh020_1: THREE.Mesh;
    Cellphone: THREE.Mesh;
    Chair01: THREE.Mesh;
    Chair02: THREE.Mesh;
    Chair03: THREE.Mesh;
    Chair04: THREE.Mesh;
    Clipboard: THREE.Mesh;
    Clock: THREE.Mesh;
    CoffeeCup_01: THREE.Mesh;
    CoffeeCup_02: THREE.Mesh;
    Coffeetable_01: THREE.Mesh;
    Coffeetable_02: THREE.Mesh;
    ComputerTower: THREE.Mesh;
    ConferencePhone: THREE.Mesh;
    Couch_01: THREE.Mesh;
    Couch_02: THREE.Mesh;
    Couch_03: THREE.Mesh;
    Couch_04: THREE.Mesh;
    Cupboard: THREE.Mesh;
    Desk_01: THREE.Mesh;
    Desk_02: THREE.Mesh;
    Desk_03: THREE.Mesh;
    Desk_04: THREE.Mesh;
    Desk_05: THREE.Mesh;
    Desk_06: THREE.Mesh;
    Deskfan: THREE.Mesh;
    Deskfan_Blade: THREE.Mesh;
    Deskphone_01: THREE.Mesh;
    DeskPreset_01: THREE.Mesh;
    DeskPreset_02: THREE.Mesh;
    DeskPreset_03: THREE.Mesh;
    DeskPreset_04: THREE.Mesh;
    DeskPreset_05: THREE.Mesh;
    DeskPreset_06: THREE.Mesh;
    Door: THREE.Mesh;
    Drain: THREE.Mesh;
    Elevator_Button: THREE.Mesh;
    ExitSign: THREE.Mesh;
    FileBox_01: THREE.Mesh;
    FileBox_02: THREE.Mesh;
    FileCabinet_01: THREE.Mesh;
    FileCabinet_02: THREE.Mesh;
    FireExtinguisher: THREE.Mesh;
    Floor_01: THREE.Mesh;
    Floor_02: THREE.Mesh;
    Floor_Carpet_Grey51: THREE.Mesh;
    Floppydisk_01: THREE.Mesh;
    Floppydisk_02: THREE.Mesh;
    Floppydisk_03: THREE.Mesh;
    Floppydisk_04: THREE.Mesh;
    FluorescentLight: THREE.Mesh;
    HandDryer: THREE.Mesh;
    JanitorCart: THREE.Mesh;
    Keyboard_01: THREE.Mesh;
    Keyboard_02: THREE.Mesh;
    Lamp_01: THREE.Mesh;
    Lamp_02: THREE.Mesh;
    Laptop: THREE.Mesh;
    Lightswitch: THREE.Mesh;
    Lockers_01: THREE.Mesh;
    Lockers_02: THREE.Mesh;
    Magazines: THREE.Mesh;
    Mirror: THREE.Mesh;
    Monitor_01: THREE.Mesh;
    Monitor_01PostItNotes: THREE.Mesh;
    Monitor_02: THREE.Mesh;
    Monitor_03: THREE.Mesh;
    Mousepad_01: THREE.Mesh;
    Mousepad_02: THREE.Mesh;
    Notepad_01: THREE.Mesh;
    Notepad_02: THREE.Mesh;
    OverheadProjector: THREE.Mesh;
    Painting_01: THREE.Mesh;
    Painting_02: THREE.Mesh;
    Papers_01: THREE.Mesh;
    Papers_02: THREE.Mesh;
    Papers_03: THREE.Mesh;
    Papers_04: THREE.Mesh;
    PaperTowelDispenser: THREE.Mesh;
    PaperTray_01: THREE.Mesh;
    PaperTray_02: THREE.Mesh;
    PaperTray_03: THREE.Mesh;
    PaperTray_04: THREE.Mesh;
    Pen_01: THREE.Mesh;
    Pen_02: THREE.Mesh;
    Pen_03: THREE.Mesh;
    Photo_01: THREE.Mesh;
    Photo_02: THREE.Mesh;
    Photocopier: THREE.Mesh;
    Pinboard_01: THREE.Mesh;
    Pinboard_02: THREE.Mesh;
    Plant_01: THREE.Mesh;
    Plant_02: THREE.Mesh;
    Plant_03: THREE.Mesh;
    Plant_04: THREE.Mesh;
    Plant_05: THREE.Mesh;
    PowerOutlet: THREE.Mesh;
    PowerOutletMulti: THREE.Mesh;
    Printer: THREE.Mesh;
    RubbishBin_01: THREE.Mesh;
    RubbishBin_02: THREE.Mesh;
    RubixCube: THREE.Mesh;
    Rug_01: THREE.Mesh;
    Rug_02: THREE.Mesh;
    Scanner: THREE.Mesh;
    SellotapeDispenser_01: THREE.Mesh;
    SellotapeDispenser_02: THREE.Mesh;
    Shelf_01: THREE.Mesh;
    Shelf_02: THREE.Mesh;
    Shelf_03: THREE.Mesh;
    Sinks: THREE.Mesh;
    SoapDispenser: THREE.Mesh;
    Stapler: THREE.Mesh;
    StickyNote_01: THREE.Mesh;
    StickyNote_02: THREE.Mesh;
    StickyNote_03: THREE.Mesh;
    StickyNotesPack_01: THREE.Mesh;
    StickyNotesPack_02: THREE.Mesh;
    StickyNotesPack_03: THREE.Mesh;
    TablePreset_01: THREE.Mesh;
    TablePreset_02: THREE.Mesh;
    TablePreset_03: THREE.Mesh;
    ToiletStall_01: THREE.Mesh;
    Toilet_Door: THREE.Mesh;
    ToiletStall_02: THREE.Mesh;
    Toilet_Door_01: THREE.Mesh;
    Toilet_Door_04: THREE.Mesh;
    Toilet_Door_02: THREE.Mesh;
    Toilet_Door_03: THREE.Mesh;
    Urinal: THREE.Mesh;
    UrinalCake: THREE.Mesh;
    Wall: THREE.Mesh;
    Wall_02: THREE.Mesh;
    Wall_CornerBlock: THREE.Mesh;
    Wall_Divider: THREE.Mesh;
    Wall_Door_01: THREE.Mesh;
    Wall_Door_02: THREE.Mesh;
    Wall_Elevator2: THREE.Mesh;
    Wall_Elevator_Door_01: THREE.Mesh;
    Wall_Elevator_Door_02: THREE.Mesh;
    Wall_Glass: THREE.Mesh;
    Glass: THREE.Mesh;
    Wall_Glass_Door: THREE.Mesh;
    Glass_Door: THREE.Mesh;
    Wall_Window: THREE.Mesh;
    WaterCooler_01: THREE.Mesh;
    WaterCooler_02: THREE.Mesh;
    Whiteboard: THREE.Mesh;
    WindowBlinds_Large: THREE.Mesh;
    WindowBlinds_Small: THREE.Mesh;
  };
  materials: {
    Main: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
  };
};

export const context = createContext();

export function Instances({ children, ...props }) {
  const { nodes } = useGLTF(OfficeLibrary) as GLTFResult;
  const instances = useMemo(
    () => ({
      Book: nodes.Book_01,
      Book1: nodes.Book_02,
      Book2: nodes.Book_03,
      Bookbox: nodes.Bookbox_01,
      Bookbox1: nodes.Bookbox_02,
      Boxfile: nodes.Boxfile_01,
      Boxfile1: nodes.Boxfile_02,
      Boxfile2: nodes.Boxfile_03,
      Boxfile3: nodes.Boxfile_04,
      Boxfile4: nodes.Boxfile_05,
      Boxfile5: nodes.Boxfile_06,
      Boxfile6: nodes.Boxfile_07,
      Boxfile7: nodes.Boxfile_08,
      Broom: nodes.Broom,
      Calendar: nodes.Calendar,
      CarboardBox: nodes.CarboardBox_01,
      CarboardBox1: nodes.CarboardBox_02,
      Ceiling: nodes.Ceiling,
      CeilingFan: nodes.CeilingFan,
      CeilingFanBlade: nodes.CeilingFan_Blade,
      Mesh: nodes.Mesh020,
      Mesh1: nodes.Mesh020_1,
      Cellphone: nodes.Cellphone,
      Chair: nodes.Chair01,
      Chair1: nodes.Chair02,
      Chair2: nodes.Chair03,
      Chair3: nodes.Chair04,
      Clipboard: nodes.Clipboard,
      Clock: nodes.Clock,
      CoffeeCup: nodes.CoffeeCup_01,
      CoffeeCup1: nodes.CoffeeCup_02,
      Coffeetable: nodes.Coffeetable_01,
      Coffeetable1: nodes.Coffeetable_02,
      ComputerTower: nodes.ComputerTower,
      ConferencePhone: nodes.ConferencePhone,
      Couch: nodes.Couch_01,
      Couch1: nodes.Couch_02,
      Couch2: nodes.Couch_03,
      Couch3: nodes.Couch_04,
      Cupboard: nodes.Cupboard,
      Desk: nodes.Desk_01,
      Desk1: nodes.Desk_02,
      Desk2: nodes.Desk_03,
      Desk3: nodes.Desk_04,
      Desk4: nodes.Desk_05,
      Desk5: nodes.Desk_06,
      Deskfan: nodes.Deskfan,
      DeskfanBlade: nodes.Deskfan_Blade,
      Deskphone: nodes.Deskphone_01,
      DeskPreset: nodes.DeskPreset_01,
      DeskPreset1: nodes.DeskPreset_02,
      DeskPreset2: nodes.DeskPreset_03,
      DeskPreset3: nodes.DeskPreset_04,
      DeskPreset4: nodes.DeskPreset_05,
      DeskPreset5: nodes.DeskPreset_06,
      Door: nodes.Door,
      Drain: nodes.Drain,
      ElevatorButton: nodes.Elevator_Button,
      ExitSign: nodes.ExitSign,
      FileBox: nodes.FileBox_01,
      FileBox1: nodes.FileBox_02,
      FileCabinet: nodes.FileCabinet_01,
      FileCabinet1: nodes.FileCabinet_02,
      FireExtinguisher: nodes.FireExtinguisher,
      Floor: nodes.Floor_01,
      Floor1: nodes.Floor_02,
      FloorCarpetGrey: nodes.Floor_Carpet_Grey51,
      Floppydisk: nodes.Floppydisk_01,
      Floppydisk1: nodes.Floppydisk_02,
      Floppydisk2: nodes.Floppydisk_03,
      Floppydisk3: nodes.Floppydisk_04,
      FluorescentLight: nodes.FluorescentLight,
      HandDryer: nodes.HandDryer,
      JanitorCart: nodes.JanitorCart,
      Keyboard: nodes.Keyboard_01,
      Keyboard1: nodes.Keyboard_02,
      Lamp: nodes.Lamp_01,
      Lamp1: nodes.Lamp_02,
      Laptop: nodes.Laptop,
      Lightswitch: nodes.Lightswitch,
      Lockers: nodes.Lockers_01,
      Lockers1: nodes.Lockers_02,
      Magazines: nodes.Magazines,
      Mirror: nodes.Mirror,
      Monitor: nodes.Monitor_01,
      MonitorPostItNotes: nodes.Monitor_01PostItNotes,
      Monitor1: nodes.Monitor_02,
      Monitor2: nodes.Monitor_03,
      Mousepad: nodes.Mousepad_01,
      Mousepad1: nodes.Mousepad_02,
      Notepad: nodes.Notepad_01,
      Notepad1: nodes.Notepad_02,
      OverheadProjector: nodes.OverheadProjector,
      Painting: nodes.Painting_01,
      Painting1: nodes.Painting_02,
      Papers: nodes.Papers_01,
      Papers1: nodes.Papers_02,
      Papers2: nodes.Papers_03,
      Papers3: nodes.Papers_04,
      PaperTowelDispenser: nodes.PaperTowelDispenser,
      PaperTray: nodes.PaperTray_01,
      PaperTray1: nodes.PaperTray_02,
      PaperTray2: nodes.PaperTray_03,
      PaperTray3: nodes.PaperTray_04,
      Pen: nodes.Pen_01,
      Pen1: nodes.Pen_02,
      Pen2: nodes.Pen_03,
      Photo: nodes.Photo_01,
      Photo1: nodes.Photo_02,
      Photocopier: nodes.Photocopier,
      Pinboard: nodes.Pinboard_01,
      Pinboard1: nodes.Pinboard_02,
      Plant: nodes.Plant_01,
      Plant1: nodes.Plant_02,
      Plant2: nodes.Plant_03,
      Plant3: nodes.Plant_04,
      Plant4: nodes.Plant_05,
      PowerOutlet: nodes.PowerOutlet,
      PowerOutletMulti: nodes.PowerOutletMulti,
      Printer: nodes.Printer,
      RubbishBin: nodes.RubbishBin_01,
      RubbishBin1: nodes.RubbishBin_02,
      RubixCube: nodes.RubixCube,
      Rug: nodes.Rug_01,
      Rug1: nodes.Rug_02,
      Scanner: nodes.Scanner,
      SellotapeDispenser: nodes.SellotapeDispenser_01,
      SellotapeDispenser1: nodes.SellotapeDispenser_02,
      Shelf: nodes.Shelf_01,
      Shelf1: nodes.Shelf_02,
      Shelf2: nodes.Shelf_03,
      Sinks: nodes.Sinks,
      SoapDispenser: nodes.SoapDispenser,
      Stapler: nodes.Stapler,
      StickyNote: nodes.StickyNote_01,
      StickyNote1: nodes.StickyNote_02,
      StickyNote2: nodes.StickyNote_03,
      StickyNotesPack: nodes.StickyNotesPack_01,
      StickyNotesPack1: nodes.StickyNotesPack_02,
      StickyNotesPack2: nodes.StickyNotesPack_03,
      TablePreset: nodes.TablePreset_01,
      TablePreset1: nodes.TablePreset_02,
      TablePreset2: nodes.TablePreset_03,
      ToiletStall: nodes.ToiletStall_01,
      ToiletDoor: nodes.Toilet_Door,
      ToiletStall1: nodes.ToiletStall_02,
      ToiletDoor1: nodes.Toilet_Door_01,
      ToiletDoor2: nodes.Toilet_Door_04,
      ToiletDoor3: nodes.Toilet_Door_02,
      ToiletDoor4: nodes.Toilet_Door_03,
      Urinal: nodes.Urinal,
      UrinalCake: nodes.UrinalCake,
      Wall: nodes.Wall,
      Wall1: nodes.Wall_02,
      WallCornerBlock: nodes.Wall_CornerBlock,
      WallDivider: nodes.Wall_Divider,
      WallDoor: nodes.Wall_Door_01,
      WallDoor1: nodes.Wall_Door_02,
      WallElevator: nodes.Wall_Elevator2,
      WallElevatorDoor: nodes.Wall_Elevator_Door_01,
      WallElevatorDoor1: nodes.Wall_Elevator_Door_02,
      WallGlass: nodes.Wall_Glass,
      Glass: nodes.Glass,
      WallGlassDoor: nodes.Wall_Glass_Door,
      GlassDoor: nodes.Glass_Door,
      WallWindow: nodes.Wall_Window,
      WaterCooler: nodes.WaterCooler_01,
      WaterCooler1: nodes.WaterCooler_02,
      Whiteboard: nodes.Whiteboard,
      WindowBlindsLarge: nodes.WindowBlinds_Large,
      WindowBlindsSmall: nodes.WindowBlinds_Small,
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

useGLTF.preload(OfficeLibrary);