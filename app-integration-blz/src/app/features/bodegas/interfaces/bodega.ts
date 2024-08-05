

export interface IResponseBinLocationUbicaciones {
  code: number;
  message: string;
  data: DataUbicaciones;
}

interface DataUbicaciones {
  'odata.metadata': string;
  value: IUbicacionBodega[];
}

export interface IUbicacionBodega{
  AbsEntry: number;
  BinCode: string;
}



export interface IResponseBinLocationBodegas {
  code: number;
  message: string;
  data: Data;
}

interface Data {
  'odata.metadata': string;
  value: IBodega[];
  'odata.nextLink': string;
}

export interface IBodega {
  Warehouse: string;
}