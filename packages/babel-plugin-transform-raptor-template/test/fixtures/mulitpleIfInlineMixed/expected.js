export default function tmpl($api, $cmp, $slotset, $ctx) {
    return [$api.h(
        "section",
        {},
        [$cmp.isTrue ? $api.h(
            "p",
            {},
            [$api.t("1")]
        ) : undefined, $api.d($cmp.foo), $cmp.isTrue ? $api.h(
            "p",
            {},
            [$api.t("3")]
        ) : undefined]
    )];
}
tmpl.ids = ["isTrue", "foo"];
