import { addManufacturer ,updateManufacturer,deleteBrand,addBrand,updateBrand,getAllByFilter,
  getBrandByFilter} from '../../api/addCompany'
  
  const company = {
    actions: {
        AddManufacturer({ commit }, maninfo) {
            return new Promise((resolve, reject) => {
                addManufacturer(maninfo.name_en, maninfo.name_cn, maninfo.gmc_report_type, maninfo.gmc_report_url,
                  maninfo.description, maninfo.created_by, maninfo.creation_date, maninfo.last_update_by, maninfo.last_update_date, maninfo.call_cnt, maninfo.remark, maninfo.sts_cd, maninfo.user_id).then(response => {
                commit('')
                resolve(response)
            }).catch(error => {
                reject(error)
            })
            })
        },
      UpdateManufacturer({ commit }, maninfo) {
        console.log("进入UpdateManufacturer:name_en: "+maninfo.name_en+" name_cn:"+maninfo.name_cn+" man_id: "+maninfo.man_id)
        return new Promise((resolve, reject) => {
          updateManufacturer(maninfo.man_id,maninfo.name_en, maninfo.name_cn, maninfo.gmc_report_type, maninfo.gmc_report_url,
            maninfo.description, maninfo.created_by, maninfo.creation_date, maninfo.last_update_by, maninfo.last_update_date, maninfo.call_cnt, maninfo.remark, maninfo.sts_cd, maninfo.user_id).then(response => {
              commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },

      DeleteBrand ({ commit }, brd_id) {
        return new Promise((resolve, reject) => {
          deleteBrand(brd_id).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },
      UpdateBrand({ commit }, brandinfo) {
        return new Promise((resolve, reject) => {
          updateBrand(brandinfo.man_id,brandinfo.name_en,brandinfo.name_cn,brandinfo.created_by,
            brandinfo.creation_date,brandinfo.last_update_by,brandinfo.last_update_date,brandinfo.call_cnt,
            brandinfo.remark,brandinfo.sts_cd).then(response => {
            commit('')
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      },

    AddBrand({ commit }, brandinfo) {
      return new Promise((resolve, reject) => {
        addBrand(brandinfo.man_id,brandinfo.name_en,brandinfo.name_cn,brandinfo.created_by,
          brandinfo.creation_date,brandinfo.last_update_by,brandinfo.last_update_date,brandinfo.call_cnt,
          brandinfo.remark,brandinfo.sts_cd).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetAllByFilter ({ commit },man_id) {
      return new Promise((resolve, reject) => {
        getAllByFilter(man_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    GetBrandByFilter({ commit }, man_id) {
      return new Promise((resolve, reject) => {
        getBrandByFilter( man_id).then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
     }
  }
}
export default company
