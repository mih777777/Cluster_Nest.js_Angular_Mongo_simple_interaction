import { Component, OnInit } from '@angular/core'
import { ItemService } from '../../services/item.service'
import { Items } from '../../interfaces/interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Items[] = []

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.itemService.getAll()
      .subscribe(res => {
        this.items = res
        console.log(res)
      })
  }


}
