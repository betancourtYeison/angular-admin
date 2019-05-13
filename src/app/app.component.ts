import { Component, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

export interface ProjectData {
  id: string;
  project: string;
  description: string;
  url: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayedColumns: string[] = ["id", "project", "description", "url"];
  dataSource: MatTableDataSource<ProjectData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create projects
    const PROJECTS = [
      {
        id: "1",
        project: "Spoti",
        description: "Aplicación de música",
        url: "https://betancourtYeison.github.io/angular-spoti/"
      },
      {
        id: "2",
        project: "Movies",
        description: "Aplicación de películas",
        url: "https://betancourtyeison.github.io/angular-movies/"
      },
      {
        id: "3",
        project: "Youtube",
        description: "Aplicación de youtube",
        url: "https://betancourtyeison.github.io/angular-youtube/"
      },
      {
        id: "4",
        project: "Heroes",
        description: "Aplicación de Heroes",
        url: "https://betancourtyeison.github.io/angular-heroes/"
      },
      {
        id: "5",
        project: "Maps",
        description: "Aplicación de Google maps",
        url: "https://betancourtYeison.github.io/angular-map/"
      },
      {
        id: "6",
        project: "Auth0",
        description: "Aplicación de login federado con google",
        url: "https://betancourtyeison.github.io/angular-auth0/"
      },
      {
        id: "7",
        project: "Virtual Scroll",
        description: "Aplicación de virtual scroll en angular",
        url: "https://betancourtYeison.github.io/angular-virtualscroll/"
      },
      {
        id: "8",
        project: "Forms",
        description: "Aplicación de formularios",
        url: "https://betancourtyeison.github.io/angular-forms/"
      },
      {
        id: "9",
        project: "Graphics",
        description: "Aplicación de Gráficos dinámicos",
        url: "https://betancourtyeison.github.io/angular-graphics/"
      },
      {
        id: "10",
        project: "Pipes",
        description: "Aplicación de angular pipes",
        url: "https://betancourtyeison.github.io/angular-pipes/"
      },
      {
        id: "11",
        project: "Miscelaneos",
        description: "Aplicación de componentes angular",
        url: "https://betancourtYeison.github.io/angular-miscelaneos/"
      }
    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(PROJECTS);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
