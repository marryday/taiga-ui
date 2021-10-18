import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_PREVIEW_PAGINATION_TEXTS} from '@taiga-ui/addon-preview/tokens';
import {clamp, tuiDefaultProp} from '@taiga-ui/cdk';
import {LanguagePreview} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-preview-pagination',
    templateUrl: './preview-pagination.template.html',
    styleUrls: ['./preview-pagination.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewPaginationComponent {
    @Input()
    @tuiDefaultProp()
    lastIndex = 1;

    @Input()
    @tuiDefaultProp()
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    constructor(
        @Inject(TUI_PREVIEW_PAGINATION_TEXTS)
        readonly texts$: Observable<LanguagePreview['previewPagination']>,
    ) {}

    get leftButtonDisabled(): boolean {
        return this.index === 0;
    }

    get rightButtonDisabled(): boolean {
        return this.index === this.lastIndex;
    }

    @HostListener('document:keydown.arrowRight.prevent', ['1'])
    @HostListener('document:keydown.arrowLeft.prevent', ['-1'])
    onArrowClick(step: number) {
        this.updateIndex(clamp(this.index + step, 0, this.lastIndex));
    }

    private updateIndex(index: number) {
        if (this.index === index) {
            return;
        }

        this.index = index;
        this.indexChange.emit(index);
    }
}
