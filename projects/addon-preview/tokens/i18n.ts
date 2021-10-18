import {InjectionToken} from '@angular/core';
import {extractI18n} from '@taiga-ui/i18n';

export const TUI_PREVIEW_TEXTS = new InjectionToken(`tui-preview i18n`, {
    factory: extractI18n('previewTexts'),
});

export const TUI_PREVIEW_PAGINATION_TEXTS = new InjectionToken(
    `tui-preview pagination i18n`,
    {
        factory: extractI18n('previewPagination'),
    },
);

export const TUI_PREVIEW_ZOOM_TEXTS = new InjectionToken('tui-preview zoom i18n', {
    factory: extractI18n('zoomTexts'),
});
