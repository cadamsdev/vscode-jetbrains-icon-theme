export interface Theme {
  iconDefinitions: { [key: string]: { iconPath: string } };
  file:            string;
  folder:          string;
  folderNames:     { [key: string]: string };
  fileNames:       { [key: string]: string };
  fileExtensions:  { [key: string]: string };
}
