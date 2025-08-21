import { FormView } from "@/compositions/form-view/form-view";
import { PagedView } from "@/compositions/paged-view/paged-view";
import { PreviewFrame } from "@/compositions/preview-frame/preview-frame";
import { ViewportProvider } from "@/contexts/viewport-provider";
import { resumeDataES } from "@/data/fran.es";
import { Column } from "@/page-layouts/column-layout/column";
import { ColumnLayout } from "@/page-layouts/column-layout/column-layout";
import { Contact } from "@/sections/contact/contact";
import { Education } from "@/sections/education/education";
import { Name } from "@/sections/name/name";
import { ProfilePicture } from "@/sections/profile-pic/profile-pic";
import { Summary } from "@/sections/summary/summary";
import { useThemeContext } from "./contexts/theme-context";

function App() {
  const { theme } = useThemeContext();

  return (
    <div className="viewport-frame">
      <ViewportProvider>
        <FormView />
        <PreviewFrame theme={theme}>
          <PagedView>
            <div className="display-page">
              <ColumnLayout arrangement="left-sidebar">
                <Column slot="sidebar">
                  <Name
                    data={resumeDataES.name}
                    highlight="lastname"
                    bold="firstname"
                    // columnSpan="col-span-1"
                  />
                  <ProfilePicture
                    firstName={resumeDataES.name.firstName}
                    picture={resumeDataES.picture}
                    bgAccentColor="#8a937f"
                    variant="squared-shadow-bg"
                  />
                  <Contact
                    data={resumeDataES.contact}
                    columnSpan="col-span-1"
                  />
                  {resumeDataES.summary && (
                    <Summary data={resumeDataES.summary} />
                  )}
                </Column>
                <Column slot="main">
                  <Contact
                    data={resumeDataES.contact}
                    iconStyle="pill"
                    columnSpan="col-span-full"
                  />
                  {resumeDataES.education && (
                    <Education data={resumeDataES.education} />
                  )}
                </Column>
              </ColumnLayout>
              <Contact
                data={resumeDataES.contact}
                iconStyle="pill"
                columnSpan="col-span-full"
              />
            </div>
            <div className="display-page">
              <p>
                1 - Lorem ipsum dolor sit amet consectetur, adipiscing elit
                posuere pulvinar nisi, eros interdum curabitur erat. Erat
                hendrerit per tincidunt posuere vel eleifend ante pharetra
                ultrices primis, sapien montes nisl vivamus nostra sagittis at
                id iaculis, nulla consequat tempus in neque lacinia fringilla
                porttitor sociosqu. Viverra nec interdum phasellus blandit
                vehicula ut ullamcorper hendrerit arcu, ornare convallis gravida
                dictum proin condimentum parturient urna, integer erat semper
                dignissim curae platea himenaeos feugiat.
              </p>
              <p>
                2 - Mauris aptent id volutpat nam vitae commodo taciti
                sollicitudin, senectus penatibus dictum a porta rhoncus
                pharetra, nisl at ultricies eros bibendum sem curae. Cras libero
                lacus litora at torquent proin porttitor mollis nulla, ac est
                senectus suspendisse per duis ligula ante, ultricies et
                hendrerit venenatis ornare eget augue nec. Faucibus class diam
                velit scelerisque nunc imperdiet consequat, vehicula congue
                pretium donec sodales cras leo justo, cum nulla sociosqu
                fringilla sem magnis.
              </p>
            </div>
            <div className="display-page">
              <p>
                3 - Etiam rhoncus condimentum ante, at dignissim nibh
                sollicitudin quis. Sed vel nulla ut metus pretium finibus. Sed
                aliquam mauris justo. Curabitur in efficitur arcu, sed tristique
                odio. Morbi tempus justo ac mattis gravida. Nulla euismod
                accumsan neque et finibus. Cras ornare sodales commodo. Nullam
                urna enim, lobortis vel lobortis placerat, sagittis id neque.
                Sed tempor orci eu enim dapibus, in porttitor odio tempor.
                Mauris convallis nunc ac mollis lacinia. Phasellus egestas odio
                vel imperdiet tincidunt. Aliquam semper odio ac semper molestie.
              </p>
              <p>
                4 - Sed varius dignissim risus. Vivamus accumsan dictum ornare.
                In in diam eget nunc sodales tristique ut sit amet dolor.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Donec vel convallis magna. Donec bibendum blandit lacus, quis
                hendrerit leo dapibus tempor. Mauris semper aliquam sagittis.
                Nulla ipsum massa, gravida ut nunc a, eleifend faucibus dui.
                Vivamus bibendum ante non sapien ornare suscipit sed vel nunc.
              </p>
            </div>
          </PagedView>
        </PreviewFrame>
      </ViewportProvider>
    </div>
  );
}

export default App;
