import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-metric-calculator',
  templateUrl: './metric-calculator.component.html',
  styleUrls: ['./metric-calculator.component.scss']
})
export class MetricCalculatorComponent implements OnInit {
  barDefaultWeights: Array<number> = [
    20,
    2.5,
    5
  ];
  
  barType: number = 0;
  emptyBarWeight: number = 20;
  targetWeight: number = 20;
  barWidth: number = 25;
  requiredWeights: Array<{ value: number, quantity: number, plateColor: string }> = [];
  weightStep: number = 2;

  defaultPlates: Array<{ value: number, quantity: number, plateColor: string}> = [
    { value: 25, quantity: 10, plateColor: "#FF9999"},
    { value: 20, quantity: 10, plateColor: "#588dff"},
    { value: 15, quantity: 2, plateColor: "#FFFF99"},
    { value: 10, quantity: 2, plateColor: "#7FBF7F"},
    { value: 5, quantity: 4, plateColor: "#FFF"},
    { value: 2.5, quantity: 2, plateColor: "#FFC0CB"}
  ]

  plates: Array<{ value: number, quantity: number, plateColor: string}> = this.defaultPlates;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  setBarType(barTypeId: number){
    this.barType = barTypeId;
    switch(barTypeId){
      case 0: {
        this.plates = Object.assign([], this.defaultPlates);
        this.weightStep = 2;
        this.emptyBarWeight = this.barDefaultWeights[0];
        break;
      }
      case 1: {
        this.emptyBarWeight = this.barDefaultWeights[1];
        this.weightStep = 4;
        this.plates = Object.assign([], [
          { value: 25, quantity: 0, plateColor: "#FF9999"},
          { value: 20, quantity: 0, plateColor: "#588dff"},
          { value: 15, quantity: 4, plateColor: "#FFFF99"},
          { value: 10, quantity: 8, plateColor: "#7FBF7F"},
          { value: 5, quantity: 10, plateColor: "#FFF"},
          { value: 2.5, quantity: 10, plateColor: "#FFC0CB"},
        ]);
        break;
      }
      case 2: {
        this.plates = Object.assign([], this.defaultPlates);
        this.weightStep = 1;
        this.emptyBarWeight = this.barDefaultWeights[2];
        break;
      }
    }
    
    this.targetWeight = this.emptyBarWeight;
  }

  getTotalWeight() {
    var totalWeight = this.emptyBarWeight

    if(this.barType === 1)
    {
      this.plates.forEach(function (weight) {
        totalWeight += weight.value * (weight.quantity / 2)
      })
    } else {      
      this.plates.forEach(function (weight) {
        totalWeight += weight.value * weight.quantity
      })
    }
    
    return totalWeight
  }

  calculateRequiredPlates() {
    switch(this.barType){
      case 0: {
        this.requiredWeights = this.calculateRequiredPlatesBarbell(this.plates, this.targetWeight, this.emptyBarWeight)
        break;
      }
      case 1: {
        this.requiredWeights = this.calculateRequiredPlatesDumbbells(this.plates, this.targetWeight, this.emptyBarWeight)
        break;
      }
      case 2: {
        this.requiredWeights = this.calculateRequiredPlatesLoadingPin(this.plates, this.targetWeight, this.emptyBarWeight)
        break;
      }
    }
    
    return this.requiredWeights;
  }  
  
  calculateRequiredPlatesBarbell(weights, targetWeight, barbellWeight) {
    var requiredWeights = []

    /* Subtract bar weight from desired weight. */
    var requiredWeightPlateTotal = targetWeight - barbellWeight

    /* Loop over weights to build up weight per side */
    weights.sort((a, b) => (a.value < b.value) ? 1 : -1)

    weights.forEach(weight => {
      /* Round down single plates to make plate pairs */
      if(weight.quantity % 2 != 0)
      {
        weight.quantity--;
      }

      /* Skip empty plate and plates that don't have any pairs */
      if (weight.quantity < 2) {
        return;
      }

      var platePairs = weight.quantity / 2;
      for (let i = 0; i < platePairs; i += 1) {
        /* Check that 4 plates don't exceed requiredWeightPlateTotal */
        if (weight.value * 2 <= requiredWeightPlateTotal) {
          requiredWeights.push(weight);
          requiredWeightPlateTotal -= (weight.value * 2);
        }
      }
    })
    return requiredWeights;
  }

  calculateRequiredPlatesDumbbells(weights, targetWeight, barbellWeight) {
    var requiredWeights = []

    /* Subtract bar weight from desired weight. */
    var requiredWeightPlateTotal = targetWeight - barbellWeight

    /* Loop over weights to build up weight per side */
    weights.sort((a, b) => (a.value < b.value) ? 1 : -1)

    weights.forEach(weight => {
      /* Round down 1-3 plates to make plate quads */
      if(weight.quantity % 4 != 0)
      {
        weight.quantity--;
        if(weight.quantity % 4 != 0)
        {
          weight.quantity--;
          if(weight.quantity % 4 != 0)
          {
            weight.quantity--;
          }
        }
      }

      /* Skip empty plate and plates that don't have any pairs */
      if (weight.quantity < 4) {
        return;
      }

      var platePairs = weight.quantity / 4;

      for (let i = 0; i < platePairs; i += 1) {
        /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
        if (weight.value * 2 <= requiredWeightPlateTotal) {
          requiredWeights.push(weight);
          requiredWeightPlateTotal -= (weight.value * 2);
        }
      }
    })
    return requiredWeights;
  }

  calculateRequiredPlatesLoadingPin(weights, targetWeight, barbellWeight) {
    var requiredWeights = []

    /* Subtract bar weight from desired weight. */
    var requiredWeightPlateTotal = targetWeight - barbellWeight

    /* Loop over weights to build up weight per side */
    weights.sort((a, b) => (a.value < b.value) ? 1 : -1)

    weights.forEach(weight => {
      /* Skip empty plate */
      if (weight.quantity === 0) {
        return;
      }

      var platePairs = weight.quantity;

      for (let i = 0; i < platePairs; i += 1) {
        /* Check that 2 plates doesn't exceed requiredWeightPlateTotal */
        if (weight.value <= requiredWeightPlateTotal) {
          requiredWeights.push(weight);
          requiredWeightPlateTotal -= weight.value;
        }
      }
    })
    return requiredWeights;
  }

  generateRequiredPlatesString() {
      this.requiredWeights = this.calculateRequiredPlates();
    return this.getRequiredPlatesString();
  }

  getRequiredPlatesString() { 
    this.calculateRequiredPlates();
    var outputString = "";

    switch(this.barType){
      case 0: {
        outputString = this.generateBarbellPlatesString();
        break;
      }
      case 1: {
        outputString = this.generateDumbbellPlatesString();
        break;
      }
      case 2: {
        outputString = this.generateLoadingPinPlatesString();
        break;
      }
    }

    return "";
  }

  getBarbellPlatesCount() { 
    var plateCount = [
    { weight:  45, count: 0},
    { weight:  35, count: 0},
    { weight:  25, count: 0},
    { weight:  10, count: 0},
    { weight:   5, count: 0},
    { weight: 2.5, count: 0},
  ]

  for (let i = 0; i <= this.requiredWeights.length - 1; i++) {
    plateCount.forEach(plate => {
      if(plate.weight === this.requiredWeights[i].value)
      {
        plate.count++;
      }
    })
  }

  plateCount.filter(plate => plate.count != 0);

  return plateCount;

  }

  generateBarbellPlatesString(){
    /* Return string of plates in order */
    var outputString = "";
    var plateCount = this.getBarbellPlatesCount();

    plateCount.reverse().forEach(plate => {
      if(plate.count > 0)
      {
        outputString = outputString + plate.weight + "(x" + plate.count + ") - "
      }
    })

    outputString = outputString + " | Barbell " + this.emptyBarWeight + "kg | ";

    plateCount.reverse().forEach(plate => {
      if(plate.count > 0)
      {
        outputString = outputString + " - " + plate.weight + "(x" + plate.count + ")"
      }
    })

    return outputString;
  }

  generateDumbbellPlatesString(){
    return "";
  }

  generateLoadingPinPlatesString(){
    return "";
  }

  getPlateColor(plate) {
    return plate.plateColor;
  }
}
