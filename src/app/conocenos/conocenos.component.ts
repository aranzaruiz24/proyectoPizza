import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.component.html',
  styleUrls: ['./conocenos.component.css']
})
export class ConocenosComponent implements OnInit {
  public selectedVoice!: SpeechSynthesisVoice;
  public selectedRate: number;
  public pause:number;
	public text: any;

  constructor() { 
    this.selectedRate = 1
    this.text = ""
    this.pause=0
  }

  ngOnInit(): void {
  }
  public speak() : void {
    if(speechSynthesis.speaking){
    }
    else{
      this.pause=0
    }
    if(this.pause==0){
      this.text=document.getElementsByTagName('p')[0].innerHTML;
		  this.synthesizeSpeechFromText(this.selectedRate, this.text );
    }
    else{
      speechSynthesis.resume()
    }

	}

  stop():void {
		if ( speechSynthesis.speaking ) {
			speechSynthesis.pause()
      this.pause=1
		}
    else{
      this.pause=0
    }
	}

  private synthesizeSpeechFromText(rate: number,text: string) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.rate = rate;
		speechSynthesis.speak( utterance );

	}

}
