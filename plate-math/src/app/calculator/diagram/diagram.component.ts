import { Component, OnInit, Input } from '@angular/core';
import { INSPECT_MAX_BYTES } from 'buffer';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  @Input() barType: number;
  @Input() emptyBarWeight: number;
  @Input() requiredWeights: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

  hasRequiredPlates(): boolean {
    return this.requiredWeights.length > 0;
  }

}
