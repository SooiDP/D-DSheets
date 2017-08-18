import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CharacterSearchService } from './character-search.service';
import { Character } from './character';

@Component({
    selector: 'character-search',
    templateUrl: './character-search.component.html',
    styleUrls: ['./character-search.component.css'],
    providers: [CharacterSearchService]
})

export class CharacterSearchComponent implements OnInit {
    characters: Observable<Character[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private CharacterSearchService: CharacterSearchService,
        private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.characters = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term 
                ? this.CharacterSearchService.search(term)
                : Observable.of<Character[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Character[]>([])
            });
    }

    gotoDetail(character: Character): void {
        let link = ['/detail', character.id];
        this.router.navigate(link);
    }
}