import {component$} from '@builder.io/qwik';
import {Logo} from '../logo/logo';
import {HelloWorld} from '../simple-app/hello-world.component';
import {Basic} from '../simple-app/basic.component';
import {StateManagement} from '../simple-app/state-management.component';
import {FetchingResources} from '../simple-app/fetching-resources.component';
import {Inline} from '../simple-app/inline.component';
import {ListenEvents} from '../simple-app/listen-events.component';
import {ListenDocument} from '../simple-app/listen-document.component';
import {PreventingDefaultBehaviour} from '../simple-app/preventing-default-behaviour.component';
import {SynchronousEvent} from '../simple-app/synchronous-event.component';
import {ProgrammaticListenersUseOn} from '../simple-app/programmatic-listeners-use-on.component';
import {ProgrammaticListenersUseOnDocument} from '../simple-app/programmatic-listeners-use-on-document.component';
import {ProgrammaticListenersUseOnWindow} from '../simple-app/programmatic-listeners-use-on-window.component';
import {StoringStorage} from '../simple-app/storing-storage.component';
import {RecursiveStore} from '../simple-app/recursive-store.component';
import {SerializationGraph} from '../simple-app/serialization-graph.component';
import {NonSerializableProperties} from '../simple-app/non-serializable-properties.compoent';
import {PassingData} from '../simple-app/passing-data.component';
import {MutableProps} from '../simple-app/mutable-props.component';
import {PassingStores} from '../simple-app/passing-stores.component';
import {PassingClosures} from '../simple-app/passing-closures.component';
import {ImplicitTemplatesUpdates} from '../simple-app/implicit-templates-updates.component';
import {UseWatch} from '../simple-app/use-watch.component';
import {UseResource} from '../simple-app/use-resource.component';
import {UseContext} from '../simple-app/use-context.component';
import {UseMount} from '../simple-app/use-mount.component';
import {UseCleanup} from '../simple-app/use-cleanup.component';
import {UseClientEffect} from '../simple-app/use-client-effect.component';
import {UseRef} from '../simple-app/use-ref.component';
import {BasicProjection} from '../simple-app/basic-projection.componet';
import {NamedSlots} from '../simple-app/named-slots.component';
import {FallbackContent} from '../simple-app/fallback-content.components';
import {UseStyles} from '../simple-app/use-styles.component';
import {UseStylesScope} from '../simple-app/use-styles-scope.component';
import {LazyLoadingConstants} from '../simple-app/lazy-loading-constants.component';
import {LazyLoadingClosures} from '../simple-app/lazy-loading-closures.component';
import {CreatingApiWithDollar} from '../simple-app/creating-api-with-dollar.component';
import {ComposingUseHooks} from '../simple-app/composing-use-hooks.component';
import {TreeShakingStatic} from '../simple-app/tree-shaking-static.component';
import {CapturingLexicalScope} from '../simple-app/capturing-lexical-scope.component';

export const App = component$(() => {
    return (
        <div class="my-app p-20">
            <Logo/>
            {/*<HelloWorld />*/}
            {/*<Basic />*/}
            {/*<StateManagement />*/}
            {/*<FetchingResources/>*/}
            {/*<Inline/>*/}
            {/*<ListenEvents/>*/}
            {/*<ListenDocument/>*/}
            {/*<PreventingDefaultBehaviour/>*/}
            {/*<SynchronousEvent/>*/}
            {/*<ProgrammaticListenersUseOn/>*/}
            {/*<ProgrammaticListenersUseOnDocument/>*/}
            {/*<ProgrammaticListenersUseOnWindow/>*/}
            {/*<StoringStorage/>*/}
            {/*<RecursiveStore/>*/}
            {/*<SerializationGraph/>*/}
            {/*<NonSerializableProperties/>*/}
            {/*<PassingData/>*/}
            {/*<MutableProps/>*/}
            {/*<PassingStores/>*/}
            {/*<PassingClosures/>*/}
            {/*<ImplicitTemplatesUpdates/>*/}
            {/*<UseWatch/>*/}
            {/*<UseResource/>*/}
            {/*<UseContext/>*/}
            {/*<UseMount/>*/}
            {/*<UseCleanup/>*/}
            {/*<UseClientEffect/>*/}
            {/*<UseRef/>*/}
            {/*<BasicProjection/>*/}
            {/*<NamedSlots/>*/}
            {/*<FallbackContent/>*/}
            {/*<UseStyles/>*/}
            {/*<UseStylesScope/>*/}
            {/*<LazyLoadingConstants/>*/}
            {/*<LazyLoadingClosures/>*/}
            {/*<CreatingApiWithDollar/>*/}
            {/*<ComposingUseHooks/>*/}
            {/*<TreeShakingStatic/>*/}
            <CapturingLexicalScope/>
        </div>
    );
});
