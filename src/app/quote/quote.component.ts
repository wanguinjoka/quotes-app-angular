import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,'you may not be the best in the room but if you are in the room you stand a chance','Ikponmwosa Osakioduwa',new Date(2018,7,10)),
    new Quote(2,'the poor will always be amoung us','jesus christ',new Date (2018,7,5)),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.entryDate = new Date(quote.entryDate)
    this.quotes.push(quote)
  }

  toogleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].message}`)
      if(toDelete){
      this.quotes.splice(index,1);
    }
  }
}
  constructor() { }

  ngOnInit() {
  }

}
